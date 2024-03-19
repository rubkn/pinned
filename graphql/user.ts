import { gql } from "@apollo/client";
import { UserPins } from "@pinned/utils/types";
import { transformUserPins } from "@pinned/utils/transformers";

import userClient from "./client";

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

export const getPinnedRepos = async (username: string): Promise<UserPins> => {
  const {
    data: { user },
  } = await userClient.query({
    query: GET_PINNED_REPOS,
    variables: { username },
  });

  return transformUserPins(user);
};
