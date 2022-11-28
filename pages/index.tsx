import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  console.log("username", username);

  const usernameHandler = (event: any) => {
    setUsername(event.target.value);
  };

  const getPinnedRepos = async () => {
    router.push(`/api/user/${username}`);
  };

  return (
    <div className="font-sans">
      <Head>
        <title>ghpin by rvk</title>
        <meta
          name="description"
          content="api service to get pinned repos on github"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-lg text-neutral-200 p-6 sm:p-12">
        <h1 className="text-5xl font-bold">Welcome!</h1>
        <div>
          {/* intro */}
          <h2 className="text-2xl font-bold mt-12">
            What is <span className="font-bold font-mono">ghpin</span>?
          </h2>
          <p className="mt-4">
            <span className="font-bold font-mono">ghpin</span>, and abbreviation
            for GitHub Pinned is a simple API service that allows you to get the
            pinned repositories of any github user.
          </p>

          {/* input and button */}
          <div className="flex flex-col mt-4 m-auto">
            <input
              type="text"
              placeholder="Enter a github username"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              onChange={usernameHandler}
            />
            <button
              className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              onClick={getPinnedRepos}
            >
              Get pinned repos
            </button>
          </div>

          {/* how-to */}
          <h2 className="text-2xl font-bold mt-12">
            How to use <span className="font-bold font-mono">ghpin</span>?
          </h2>
          <p className="mt-4">
            To use <span className="font-bold font-mono">ghpin</span>, you just
            need to make a GET request to{" "}
            <span className="font-bold font-mono">ghpin</span> API with the
            username of the github user you want to get the pinned repos from.
          </p>
          <p className="mt-4">
            The API will return a JSON with the pinned repos of the user.
          </p>
          <p className="mt-4">
            The API is available at{" "}
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
              /api/user/[username]
            </span>
          </p>
          <p className="mt-4">
            You can use the API with the username of any github user.
          </p>
          <p className="mt-4">
            For example, to get the{" "}
            <Link
              href="
              https://vercel.com"
              className="text-blue-600 hover:text-blue-800"
            >
              Vercel
            </Link>{" "}
            pinned repositories, you just need to make a GET request to{" "}
            <Link
              href="
              /api/user/vercel"
              className="text-blue-600 hover:text-blue-800"
            >
              /api/user/vercel
            </Link>
          </p>
        </div>
      </main>

      <footer className="flex flex-col p-6 sm:p-12">
        <span>
          Developed by{" "}
          <Link href="https://rubenbrandao.com" className="font-bold">
            rvk
          </Link>
        </span>
        <span>
          Powered by{" "}
          <Link href="https://vercel.com/" className="font-bold">
            Vercel
          </Link>
        </span>
      </footer>
    </div>
  );
}
