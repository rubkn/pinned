import CopyButton from "@/app/_components/copy-json-button";
import { getPinnedRepos } from "@/lib/queries";

export default async function UserPinnedReposPage({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;
  if (!username) throw new Error("Username is required");

  const data = await getPinnedRepos(username);
  console.log(data);

  return (
    <main className="p-6 m-auto flex w-full flex-col text-base font-light leading-relaxed antialiased shadow-2xl">
      <h1>Pinned Repositories</h1>
      <CopyButton data={data} />
      {data.pinnedItems.map((repo) => (
        <div key={repo.name}>
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
          <a href={repo.url}>Repository Link</a>
        </div>
      ))}
    </main>
  );
}
