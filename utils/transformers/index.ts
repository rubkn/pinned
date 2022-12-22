import { Response } from "@pinned/utils/types";

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

const transformPinnedItems = (pins: any) => {
  return pins.map((pin: { node: any }) => {
    const {
      node: {
        name,
        description,
        url,
        stargazerCount,
        forkCount,
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
      languages,
    };
  });
};

const transformLanguages = (langs: any) => {
  return langs.reduce((acc: any, curr: any) => {
    const {
      node: { name },
    } = curr;
    acc.push(name);
    return acc;
  }, []);
};

export { transformUserPins, transformPinnedItems, transformLanguages };
