export default {
  name: "John Doe",
  bio: "software developer",
  company: "solo",
  twitterUsername: "johndoe",
  websiteUrl: "https://johndoe.com",
  url: "https://github.com/johndoe",
  pinnedItems: {
    edges: [
      {
        node: {
          name: "repo1",
          description: "My first repository",
          url: "https://github.com/johndoe/repo1",
          stargazerCount: 100,
          forkCount: 50,
          languages: {
            edges: [
              {
                node: {
                  name: "JavaScript",
                  color: "#f1e05a",
                },
              },
              {
                node: {
                  name: "TypeScript",
                  color: "#2b7489",
                },
              },
            ],
          },
        },
      },
      {
        node: {
          name: "repo2",
          description: "My second repository",
          url: "https://github.com/johndoe/repo2",
          stargazerCount: 200,
          forkCount: 100,
          languages: {
            edges: [
              {
                node: {
                  name: "JavaScript",
                  color: "#f1e05a",
                },
              },
            ],
          },
        },
      },
    ],
  },
};
