import React, { useEffect } from "react";
import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);

  // const handleGetPostClicked = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then(data => {
  //       addInitialPosts(data.posts)
  //     });

  // };

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const normalized = data.posts.map((post) => ({
          ...post,
          reactions: post.reactions.likes, // or likes + dislikes
        }));
        addInitialPosts(normalized);
      });
  }, []);

  
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage  />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
