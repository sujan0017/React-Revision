import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const userIdElement = useRef("");
  const postTitleElement = useRef("");
  const postBodyElement = useRef("");
  // const reactionsElement = useRef("");
  const reactionsLikesElement = useRef("");
  const reactionsDislikesElement = useRef("");
  const tagsElement = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactionsLikes = reactionsLikesElement.current.value;
    const reactionsDislikes = reactionsDislikesElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsLikesElement.current.value = "";
    reactionsDislikesElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        title: postTitle,
        body: postBody,
        reactions: {
          likes: reactionsLikes,
          dislikes: reactionsDislikes,
        },
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        navigate("/");
      });

    
  };

  return (
    <form className="createPost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter your user id."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are your feeling today...."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="title"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          No of Likes
        </label>
        <input
          ref={reactionsLikesElement}
          type="number"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to your post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          No of Dislikes
        </label>
        <input
          ref={reactionsDislikesElement}
          type="number"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to your post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space."
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
