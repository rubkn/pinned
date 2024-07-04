import { GraphQLClient } from "graphql-request";

const endpoint = "https://api.github.com/graphql";

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `bearer ${process.env.GH_TOKEN}`,
  },
});

export default client;
