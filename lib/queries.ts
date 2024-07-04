import client from "./gql";
import { gql } from "graphql-request";
import { transformUserPins } from "@/lib/transformers";
import { Response, User } from "./types";

const GET_PINNED_REPOS = gql`
  query user($username: String!) {
    user(login: $username) {
      name
      company
      bio
      twitterUsername
      websiteUrl
      url
      pinnedItems(first: 6) {
        totalCount
        edges {
          node {
            ... on Repository {
              id
              name
              description
              url
              stargazerCount
              forkCount
              homepageUrl
              languages(first: 2, orderBy: { field: SIZE, direction: DESC }) {
                edges {
                  node {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getPinnedRepos = async (username: string) => {
  const data: Response = await client.request(GET_PINNED_REPOS, {
    username,
  });

  return transformUserPins(data);
};
