export type Error = {
  message: string;
};

export type Response = {
  user: {
    login: string;
    name: string;
    company: string | null;
    bio: string;
    twitterUsername: string;
    websiteUrl: string;
    url: string;
    avatarUrl: string;
    pinnedItems: {
      totalCount: number;
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
};

export type User = {
  login: string;
  name: string;
  bio: string;
  company: string;
  twitterUsername: string;
  websiteUrl: string;
  url: string;
  avatarUrl: string;
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
