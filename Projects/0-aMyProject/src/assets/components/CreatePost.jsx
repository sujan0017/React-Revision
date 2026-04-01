import React, { useContext, useRef } from "react";
import { AppListContext } from "../store/app-store";

function CreatePost() {
  const { createPost } = useContext(AppListContext);

  const userIdRef = useRef("");
  const postTitleRef = useRef("");
  const postBodyRef = useRef("");
  const tagsRef = useRef("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    let userId = userIdRef.current.value;
    let postTitle = postTitleRef.current.value;
    let postBody = postBodyRef.current.value;
    let tags = tagsRef.current.value.split(" ");

    createPost(userId, postTitle, postBody, tags);

    userIdRef.current.value = "";
    postTitleRef.current.value = "";
    postBodyRef.current.value = "";
    tagsRef.current.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          ref={userIdRef}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter the user ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">
          Post title
        </label>
        <input
          ref={postTitleRef}
          type="text"
          className="form-control"
          id="postTitle"
          placeholder="Enter the Post title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postBody" className="form-label">
          Description
        </label>
        <textarea
          ref={postBodyRef}
          placeholder="Enter the description"
          rows={5}
          type="text"
          className="form-control"
          id="postBody"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          ref={tagsRef}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Write the tags separating by space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CreatePost;
