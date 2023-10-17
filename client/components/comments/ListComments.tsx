import { CommentsType } from "@/types/base";

export interface IListComments {
  comments: CommentsType[];
}

const ListComments: React.FC<IListComments> = ({ comments }) => {
  return (
    <div className="relative mt-2">
      <ul className="text-base ml-2">
        {comments.map((comment: any, index: number) => {
          return (
            <li
              key={index}
              className={`${comment.status === "rejected" && "text-red-500"}`}
            >
              {comment.status === "approved" ? comment.content : comment.status}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListComments;
