"use client";

import { Pin, User } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function RepoCard(repo: Pin) {
  return (
    <div
      className="p-2 rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col justify-between"
      data-v0-t="card"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <Image
            src={user.avatarUrl}
            width={40}
            height={40}
            alt={`${user.login}'s avatar`}
            className="rounded-full"
          />
          <div>
            <div className="font-bold">{`${user.login}/${user.pinnedItems[0].name}`}</div>
            <div className="text-sm text-muted-foreground">
              {user.pinnedItems[0].description}
            </div>
          </div> */}
        </div>
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          View on GitHub
        </Link>
      </div>
      <div className="text-muted-foreground">
        Beautifully designed components that you can copy and paste into your
        apps. Accessible. Customizable. Open Source.
      </div>
    </div>
  );
}
