import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../interfaces";
import { user } from "../../../data";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  return res.status(200).json(user);
}
