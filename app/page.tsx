import Link from "next/link";
import SearchUsername from "./_components/search-username-button";

export default function Home() {
  return (
    <main className="font-sans p-6 sm:p-12">
      <section className="text-lg text-neutral-200 ">
        <h1 className="text-5xl font-bold font-mono">pinned</h1>
        <h2 className="py-2 text-base">
          Your pinned github repositories in an instant!
        </h2>

        <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-neutral-800" />
        <div>
          {/* intro */}
          <h2 className="text-2xl font-bold mt-12">
            What is <span className="font-bold font-mono">pinned</span>?
          </h2>
          <p className="py-4">
            <span className="font-bold font-mono">pinned</span> is a simple API
            service that allows you to get the pinned repositories of any github
            user.
          </p>

          {/* input and button */}
          <SearchUsername />

          {/* how-to */}
          <h2 className="text-2xl font-bold mt-12">
            How to use <span className="font-bold font-mono">pinned</span>?
          </h2>
          <p className="py-2">
            To use <span className="font-bold font-mono">pinned</span>, you just
            need to make a GET request to{" "}
            <span className="font-bold font-mono">pinned</span> API with the
            username of the github user you want to get the pinned repos from.
          </p>
          <p className="py-2">
            The API will return a JSON with the pinned repos of the user.
          </p>
          <p className="py-2">
            The API is available at{" "}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
              /api/user/[username]
            </span>
          </p>
          <p className="py-2">
            You can use the API with the username of any github user.
          </p>
          <p className="py-2">
            For example, to get the{" "}
            <a
              href="//vercel.com"
              className="text-blue-600 hover:text-blue-800"
            >
              Vercel
            </a>{" "}
            pinned repositories, you just need to make a GET request to{" "}
            <Link
              href="/api/user/vercel"
              className="text-blue-600 hover:text-blue-800"
            >
              /api/user/vercel
            </Link>
          </p>
          <p className="py-4 text-xs text-neutral-500">
            Note: This app is still in development, features may be added or
            removed in the future.
          </p>
        </div>
      </section>

      <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-neutral-800" />
      {/* footer */}
      <footer className="flex flex-col">
        <span>
          Developed by{" "}
          <a
            href="//rubenbrandao.com"
            className="font-bold hover:text-blue-600"
          >
            rubkn
          </a>
        </span>
        <span>
          Powered by{" "}
          <a href="//vercel.com/" className="font-bold hover:text-blue-600">
            Vercel
          </a>
        </span>
      </footer>
    </main>
  );
}
