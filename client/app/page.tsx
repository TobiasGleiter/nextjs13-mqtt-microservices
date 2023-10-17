"use client";
import CreateComments from "@/components/comments/CreateComments";
import ListComments from "@/components/comments/ListComments";
import LoadingSkeleton from "@/components/loading/LoadingSkeleton";
import CreatePosts from "@/components/posts/CreatePosts";
import { fetcher } from "@/helpers/fetcher";
import useSWR from "swr";

export default function PostsPage() {
  // FETCH POSTS
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR("http://localhost:4002/posts", fetcher, {
    refreshInterval: 3000,
  });

  // While loading posts
  if (isLoading) {
    return <LoadingSkeleton />;
  }

  // Error handling
  if (error) throw new Error(error.message);

  return (
    <div className="w-full">
      {/** POSTS CREATE */}
      <CreatePosts />
      {/** POSTS LIST */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 w-full mb-40">
        {Object.values(posts).map((post: any) => {
          return (
            <div
              key={post.id}
              className="card flex flex-col p-4 rounded-lg w-full bg-white shadow-md h-64 overflow-hidden"
            >
              <p className="title font-semibold text-xl">{post.title}</p>
              <div className="comments text-zinc-800">
                <p className="font-thin text-sm subpixel-antialiased">
                  Comments
                </p>
                <CreateComments postId={post.id} />
                <ListComments comments={post.comments} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
