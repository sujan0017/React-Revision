import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { PostList } from "../store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body ">
        <div className="deleteContainer">
          <h5 className="card-title">{post.title}</h5>

          <TiDelete
            className="deleteButton"
            onClick={() => deletePost(post.id)}
          />
        </div>

        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            #{tag}
          </span>
        ))}

        <div className={` alert alert-success reaction`} role="alert">
          This post has been reacted by {post.reactions.likes} people and
          disliked by {post.reactions.dislikes}
        </div>
      </div>
    </div>
  );
}

export default Post;
