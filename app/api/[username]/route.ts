import { NextResponse } from "next/server";
import { getPinnedRepos } from "@/lib/queries";

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  const { username } = params;

  if (!username) {
    return NextResponse.json(
      { error: "Error. Username is required." },
      { status: 400 }
    );
  }

  try {
    const data = await getPinnedRepos(username);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("There was an error fetching the user.", error);

    return NextResponse.json({ error: "An error occurred." }, { status: 500 });
  }
}
