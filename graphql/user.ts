import { gql } from "@apollo/client";

import userClient from "./userClient";

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
              languages(first: 3) {
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
  console.log("username", username);

  const {
    data: { user },
  } = await userClient.query({
    query: GET_PINNED_REPOS,
    variables: { username },
  });

  return { user };
};
