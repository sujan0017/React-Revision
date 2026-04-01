import React, { useContext } from "react";
import Post from "./Post";
import { AppListContext } from "../store/app-store";

function PostList() {
  const { appList, removePost } = useContext(AppListContext);
  return (
    <center>
      {appList.map((post) => (
        <Post key={post.userId} post={post} removePost={removePost} />
      ))}
    </center>
  );
}

export default PostList;
