"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container px-2 md:px-4 h-10 items-center flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 border-t border-t-neutral-700">
      <p className="text-xs text-muted-foreground">
        Developed by{" "}
        <Link
          href={"https://rubenbrandao.com"}
          className="text-neutral-400 text-xs font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          rubkn
        </Link>
      </p>
      {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Terms of Service
        </Link>
        <Link
          href="#"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Privacy
        </Link>
      </nav> */}
    </footer>
  );
}
