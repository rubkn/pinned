export const user = [
  {
    user: {
      name: "John Doe",
      company: "Company",
      bio: "Bio",
      twitterUsername: "Twitter",
      websiteUrl: "Website",
      url: "URL",
      pinnedItems: {
        totalCount: 6,
        edges: [
          {
            node: {
              id: "1",
              name: "Repo 1",
              description: "Description 1",
              url: "URL 1",
              stargazerCount: 1,
              forkCount: 1,
              languages: {
                edges: [
                  {
                    node: {
                      name: "Language 1",
                      color: "#000000",
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    },
  },
];
