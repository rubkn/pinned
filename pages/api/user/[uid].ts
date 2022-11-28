import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import { getPinnedRepos } from "../../../graphql";
import { User, Error } from "../../../interfaces";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | Error>
) {
  const { username } = req.context.query;

  if (!username) {
    return res.status(400).json({ message: "username is required" });
  }

  const { user } = await getPinnedRepos(username as string);

  return res.status(200).json({ user });
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = context.query;
  const pins = await getPinnedRepos(user as string);

  return {
    props: {
      pinnedItems: pins,
    },
  };
};

export const config = {
  api: {
    externalResolver: true,
  },
};
