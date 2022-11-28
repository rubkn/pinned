export type Error = {
  message: string;
};

export type User = {
  user: {
    name: string;
    company: string;
    bio: string;
    twitterUsername: string;
    websiteUrl: string;
    url: string;
    pinnedItems: {
      totalCount: number;
      edges: {
        node: {
          id: string;
          name: string;
          description: string;
          url: string;
          stargazerCount: number;
          forkCount: number;
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
