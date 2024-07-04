"use client";

import React from "react";

export default function CopyButton({ data }: { data: any }) {
  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(JSON.stringify(data, null, 2))
      .then(() => {
        alert("JSON data copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <button
      onClick={handleCopyToClipboard}
      className="mb-4 p-2 bg-blue-500 text-white rounded"
    >
      Copy JSON to Clipboard
    </button>
  );
}
