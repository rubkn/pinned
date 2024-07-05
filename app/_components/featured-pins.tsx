import Link from "next/link";
import RepoCard from "./repo-card";
import { getPinnedRepos } from "@/lib/queries";

const getUser = async () => {
  const response = await getPinnedRepos("rubkn");

  return response;
};

export default async function FeaturedPins() {
  const user = await getUser();

  return (
    <div className="container px-4 md:px-6 grid gap-4 w-full max-w-3xl"></div>
  );
}
