import React from "react";

function Header({ setToggle }) {
  return (
    <div className="button-container">
      <button
        onClick={() => {
          setToggle("Home");
        }}
        className="btn btn-success"
      >
        Home
      </button>
      <button
        onClick={() => {
          setToggle("Create Post");
        }}
        className="btn btn-success"
      >
        Create Post
      </button>
    </div>
  );
}

export default Header;
