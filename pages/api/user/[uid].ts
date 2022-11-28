import { NextApiRequest, NextApiResponse } from "next";
import { getPinnedRepos } from "../../../graphql";
import { User, Error } from "../../../interfaces";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | Error>
) {
  console.log("req.query.uid", req.query);

  const { uid } = req.query;

  if (!uid) {
    return res.status(400).json({ message: "username is required" });
  }

  const { user } = await getPinnedRepos(uid as string);

  return res.status(200).json({ user });
}
