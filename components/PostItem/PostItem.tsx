import React, { FC } from "react";
import { Post } from "../../src/types";

import "./postItem.scss";
import { useDeletePostMutation } from "../../src/store/postsApi";

export const PostItem: FC<{ post: Post }> = ({ post }) => {
  const [deletePost] = useDeletePostMutation();

  const handlerDeletePost = () => {
    deletePost({ id: post.id });
  };

  return (
    <div className="post">
      <h1 className="post__title">{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={handlerDeletePost} className="post__button">
        Delete
      </button>
    </div>
  );
};
