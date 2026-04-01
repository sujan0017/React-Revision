import React from "react";
import { AppListContext } from "../store/app-store";

function Post({ post, removePost }) {
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.postTitle}{" "}
          <span style={{ color: "red", fontSize: "15px" }}>{post.userId}</span>
        </h5>

        <p className="card-text">{post.postBody}</p>
        {post.tags.map((tag) => (
          <p key={tag} className="card-text tags">
            #{tag}
          </p>
        ))}

        <button
          onClick={() => removePost(post.userId)}
          className="btn btn-danger"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Post;
