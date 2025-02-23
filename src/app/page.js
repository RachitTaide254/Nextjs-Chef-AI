"use client";

import Image from "next/image";
import { useState } from "react";
import { call } from "@/utils/callAi";

export default function Home() {
  const [value, setValue] = useState("");
  const [recipe, setRecipe] = useState("");
  //console.log(value,'ee')
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(value, "sub");
    const data = await call(value)
    // console.log(data,'eee')
    setRecipe(data)
    setValue("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-lg lg:flex">
        Ask AI, recipes you want to make
      </div>
      <div className="w-xl w-full h-fit text-pretty whitespace-pre mt-8 rounded-md p-12 tracking-wide leading-8 bg-slate-300">
          {recipe}
        </div>
      <form
        onSubmit={handleSubmit}
        className="z-10 max-w-5xl w-full mt-5 items-center gap-2 justify-between font-mono text-sm lg:flex"
      >
        <input
          onChange={handleValue}
          placeholder="How to make paneer butter masala"
          value={value}
          type="text"
          id="default-input"
          className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-green-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          Submit
        </button>
      </form>
    </main>
  );
}
