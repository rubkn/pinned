import { Language, Pin, Response } from "@pinned/utils/types";

const transformUserPins = (response: Response) => {
  const {
    name,
    bio,
    company,
    twitterUsername,
    websiteUrl,
    url,
    pinnedItems: { edges: pins },
  } = response;

  const pinnedItems = transformPinnedItems(pins);

  return {
    name,
    bio,
    company,
    twitterUsername,
    websiteUrl,
    url,
    pinnedItems,
  };
};

const transformPinnedItems = (pins: Pin[]) => {
  return pins.map((pin: { node: any }) => {
    const {
      node: {
        name,
        description,
        url,
        stargazerCount,
        forkCount,
        homepageUrl,
        languages: { edges: langs }
      }
    } = pin;

    const languages = transformLanguages(langs);

    return {
      name,
      description,
      url,
      stargazerCount,
      forkCount,
      homepageUrl,
      languages
    };
  });
};

const transformLanguages = (langs: Language[]) => {
  return langs.reduce((acc: any, { node: { name, color } }) => {
    return { ...acc, [name]: color };
  }, {});
};

export { transformUserPins, transformPinnedItems, transformLanguages };
