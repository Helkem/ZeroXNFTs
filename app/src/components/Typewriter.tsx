import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function Typewriter() {
  const words = [
    {
      text: "Search",
    },

    {
      text: "any",
    },
    {
      text: "NFT",
    },

    {
      text: "Collection",
    },

    {
      text: "by",
    },
    {
      text: "Contract",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Address.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className='flex flex-col items-center justify-center h-[17rem] mt-6 '>
      <TypewriterEffect words={words} />
      <p className='text-neutral-200 text-lg mt-11 mb-1 font-normal'>
        Select a chain, enter a contract address and find NFTs for the entire
        collection.
      </p>
    </div>
  );
}
