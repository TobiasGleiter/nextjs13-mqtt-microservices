"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <h2 className="font-semibold text-xl">Something went wrong!</h2>
        <p className=" text-red-500">{error.message}</p>
      </div>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="flex items-center w-48 shadow-md bg-cyan-500 text-white justify-center rounded-full hover:bg-cyan-400 duration-200"
      >
        Try again
      </button>
    </div>
  );
}
