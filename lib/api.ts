import { User } from "./types";

export async function fetchUser(username: string): Promise<User> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/${username}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub user");
  }

  const user: User = await response.json();

  return user;
}
