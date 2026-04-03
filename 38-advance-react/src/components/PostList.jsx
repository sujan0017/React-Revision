import React from "react";
import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList, fetching } = useContext(PostListData);

  console.log(postList);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export default PostList;
