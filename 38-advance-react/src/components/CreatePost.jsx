import React from "react";
import { Form, redirect } from "react-router-dom";

function CreatePost() {
  return (
    <Form method="POST" className="createPost">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          name="userId"
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
          name="title"
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
          name="body"
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
          name="likes"
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
          name="dislikes"
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
          name="tags"
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space."
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
}

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");

  const reactions = {
    likes: Number(postData.likes),
    dislikes: Number(postData.dislikes),
  };

  return fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: postData.userId,
      title: postData.title,
      body: postData.body,
      reactions: reactions,
      tags: postData.tags,
    }),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
      return redirect("/");
    });
}

export default CreatePost;
