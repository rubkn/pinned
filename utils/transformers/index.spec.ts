import { transformUserPins } from "@pinned/utils/transformers";
import sampleResponse from "@pinned/__fixtures__/sample_response";

describe("transformUserPins", () => {
  it("should transform the response object into a UserPins object", () => {
    const expectedResult = {
      name: "John Doe",
      bio: "software developer",
      company: "solo",
      twitterUsername: "johndoe",
      websiteUrl: "https://johndoe.com",
      url: "https://github.com/johndoe",
      pinnedItems: [
        {
          name: "repo1",
          description: "My first repository",
          url: "https://github.com/johndoe/repo1",
          stargazerCount: 100,
          forkCount: 50,
          homepageUrl: "XXXXXXXXXXXXXXXXXXX",
          languages: { JavaScript: "#f1e05a", TypeScript: "#2b7489" }
        },
        {
          name: "repo2",
          description: "My second repository",
          url: "https://github.com/johndoe/repo2",
          stargazerCount: 200,
          forkCount: 100,
          homepageUrl: "XXXXXXXXXXXXXXXXXXX",
          languages: { JavaScript: "#f1e05a" }
        }
      ]
    };

    expect(transformUserPins(sampleResponse)).toEqual(expectedResult);
  });
});
