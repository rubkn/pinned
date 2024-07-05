export default function HowItWorks() {
  return (
    <main className="flex-1 w-full py-6 md:py-12 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-4">
            <h1 className="text-balance text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              How to Use Pinned
            </h1>
            <p className="text-neutral-400 text-base max-w-[600px] text-muted-foreground md:text-lg">
              Using Pinned is straightforward. Simply make a GET request to the
              Pinned API with the GitHub username of the user whose pinned
              repositories you want to retrieve. The API will return a JSON
              object containing the user&apos;s pinned repositories.
            </p>
            <p className="text-neutral-400 max-w-[600px] text-muted-foreground md:text-lg">
              The endpoint for the API is{" "}
              <code className="text-neutral-600">/api/[username]</code>. For
              example, to get the pinned repositories for the GitHub user
              &quot;vercel&quot;, you would make a GET request to{" "}
              <code className="text-neutral-600">/api/vercel</code>.
            </p>
            <p className="text-neutral-400 max-w-[600px] text-muted-foreground md:text-lg">
              This API allows you to access the pinned repositories for any
              GitHub user effortlessly.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
