import { NextApiRequest, NextApiResponse } from "next";
import { getPinnedRepos } from "@/graphql";
import { UserPins, Error } from "@/lib/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserPins | Error>
) {
  try {
    const { uid } = req.query;

    if (!uid) {
      return res.status(400).json({ message: "Username is required" });
    }

    const response = await getPinnedRepos(uid as string);

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred" });
  }
}
