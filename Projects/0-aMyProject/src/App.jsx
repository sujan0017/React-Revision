import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatePost from "./assets/components/CreatePost";
import PostList from "./assets/components/PostList";
import Header from "./assets/components/Header";
import { useState } from "react";
import PostListProvider from "./assets/store/app-store";

function App() {
  const [toggle, setToggle] = useState("Home");
  return (
    <PostListProvider>
      <div className="main-container">
        <Header setToggle={setToggle} />

        {toggle === "Home" ? <CreatePost /> : <PostList />}
      </div>
    </PostListProvider>
  );
}

export default App;
