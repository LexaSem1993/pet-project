import React from "react";
import { PostItem } from "../../components/PostItem";
import { useGetPostsListQuery } from "../../src/store/postsApi";
import "./posts.scss";

export const Posts = () => {
  const { data: posts, isLoading } = useGetPostsListQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="posts">
      {posts?.map((item) => (
        <PostItem post={item} key={item.id} />
      ))}
    </div>
  );
};
