export type Error = {
  message: string;
};

export type Response = {
  name: string;
  company: string;
  bio: string;
  twitterUsername: string;
  websiteUrl: string;
  url: string;
  pinnedItems: {
    edges: {
      node: {
        name: string;
        description: string;
        url: string;
        stargazerCount: number;
        forkCount: number;
        homepageUrl: string;
        languages: {
          edges: {
            node: {
              name: string;
              color: string;
            };
          }[];
        };
      };
    }[];
  };
};

export type UserPins = {
  name: string;
  bio: string;
  company: string;
  twitterUsername: string;
  websiteUrl: string;
  url: string;
  pinnedItems: {
    name: string;
    description: string;
    url: string;
    stargazerCount: number;
    forkCount: number;
    homepageUrl: string;
    languages: {
      name: string;
      color: string;
    }[];
  }[];
};

export type Pin = {
  node: {
    name: string;
    description: string;
    url: string;
    stargazerCount: number;
    forkCount: number;
    homepageUrl: string;
    languages: {
      edges: {
        node: {
          name: string;
          color: string;
        };
      }[];
    };
  };
};

export type Language = {
  node: {
    name: string;
    color: string;
  };
};
