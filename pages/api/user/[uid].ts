import { NextApiRequest, NextApiResponse } from "next";
import { getPinnedRepos } from "@pinned/graphql/user";
import { UserPins, Error } from "@pinned/utils/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserPins | Error>
) {
  const { uid } = req.query;

  if (!uid) {
    return res.status(400).json({ message: "username is required" });
  }

  const response = await getPinnedRepos(uid as string);

  return res.status(200).json(response);
}
