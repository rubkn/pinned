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
    <form onSubmit={handleFormSubmit} className="flex gap-2">
      <input
        type="text"
        className="text-black flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
        placeholder="Enter your GitHub username"
        value={username}
        onChange={usernameHandler}
      />
      <button
        disabled={username.length === 0}
        onClick={() => router.push(`/api/${username}`)}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
