"use client";

import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";

export default function SearchUsername() {
  const [username, setUsername] = useState<string>("");
  const router = useRouter();

  const usernameHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (username.trim() !== "") {
      router.push(`/api/${username}`);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col mt-4 m-auto text-neutral-900"
    >
      <input
        type="text"
        placeholder="Enter a github username"
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        value={username}
        onChange={usernameHandler}
      />
      <button
        disabled={username.length === 0}
        type="submit"
        onClick={() => router.push(`/api/${username}`)}
        className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
}
