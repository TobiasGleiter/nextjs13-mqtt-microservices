"use client";

import BaseIcon from "@/components/icons/BaseIcon";
import { createPost } from "@/helpers/posts/api";
import { useState } from "react";

export interface ICreatePosts {}

const CreatePosts: React.FC<ICreatePosts> = () => {
  const [title, setTitle] = useState("");

  // CREATE NEW POST
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (title.length > 0) {
      const body = JSON.stringify({ title });
      const res = await createPost(body);

      if (!res.ok) {
        // handle error here
        return;
      }

      setTitle("");
    } else {
      // handle wrong input here
    }
  };

  return (
    <form className="flex mb-6 w-full h-10" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Write new post"
        className=" bg-white shadow-md flex-1 rounded-l-full pl-4 ring-0 focus:ring-0 outline-none"
      />
      <button
        type="submit"
        className="flex items-center w-48 shadow-md bg-cyan-500 text-white justify-center rounded-r-full hover:bg-cyan-400 duration-200"
      >
        <BaseIcon icon="plus" style="w-6 h-6" />
        <p className="ml-1 align-middle font-bold">Create</p>
      </button>
    </form>
  );
};

export default CreatePosts;
