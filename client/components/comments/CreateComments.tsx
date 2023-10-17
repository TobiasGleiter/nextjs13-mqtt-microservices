"use client";

import BaseIcon from "@/components/icons/BaseIcon";
import { createComment } from "@/helpers/comments/api";
import { useState } from "react";

export interface ICreateComments {
  postId: string;
}

const CreateComments: React.FC<ICreateComments> = ({ postId }) => {
  // COMMENTS
  const [content, setContent] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (content.length > 0) {
      const body = JSON.stringify({ content });
      const res = await createComment(body, postId);

      if (!res.ok) {
        // handle error here
        return;
      }

      setContent("");
    } else {
      // handle wrong input here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row border rounded-xl">
      <input
        onChange={(e) => setContent(e.target.value)}
        value={content}
        placeholder="Add new comment..."
        className=" bg-white flex-1 text-sm rounded-l-full pl-4 ring-0 focus:ring-0 outline-none"
      />
      <button
        type="submit"
        className="flex items-center px-4 bg-zinc-400 text-white justify-center rounded-r-full hover:bg-cyan-400 duration-200"
      >
        <BaseIcon icon="plus" style="w-6 h-6" />
      </button>
    </form>
  );
};

export default CreateComments;
