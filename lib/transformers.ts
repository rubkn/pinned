import { Language, Pin, Response } from "@/lib/types";

export function transformUserPins(response: Response) {
  const {
    user: {
      login,
      name,
      bio,
      company,
      twitterUsername,
      websiteUrl,
      url,
      avatarUrl,
      pinnedItems: { edges: pins },
    },
  } = response;

  const pinnedItems = transformPinnedItems(pins);

  return {
    login,
    name,
    bio,
    company,
    twitterUsername,
    websiteUrl,
    url,
    avatarUrl,
    pinnedItems,
  };
}

function transformPinnedItems(pins: Pin[]) {
  return pins.map((pin: { node: any }) => {
    const {
      node: {
        name,
        description,
        url,
        stargazerCount,
        forkCount,
        homepageUrl,
        languages: { edges: langs },
      },
    } = pin;

    const languages = transformLanguages(langs);

    return {
      name,
      description,
      url,
      stargazerCount,
      forkCount,
      homepageUrl,
      languages,
    };
  });
}

function transformLanguages(langs: Language[]) {
  return langs.reduce((acc: any, { node: { name, color } }) => {
    return { ...acc, [name]: color };
  }, {});
}
