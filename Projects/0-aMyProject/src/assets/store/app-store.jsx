import { useReducer } from "react";
import { createContext } from "react";

export const AppListContext = createContext({
  appList: [],
  createPost: () => {},
  removePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.userId !== action.payload.userId,
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [appList, appListReducer] = useReducer(postListReducer, DEFAULT_DATA);

  const removePost = (userId) => {
    appListReducer({
      type: "DELETE_POST",
      payload: {
        userId,
      },
    });
  };

  const createPost = (userId, postTitle, postBody, tags) => {
    appListReducer({
      type: "ADD_POST",
      payload: {
        userId,
        postTitle,
        postBody,
        tags,
      },
    });
  };

  return (
    <AppListContext.Provider value={{ appList, createPost, removePost }}>
      {children}
    </AppListContext.Provider>
  );
};

const DEFAULT_DATA = [
  {
    userId: "user101",
    postTitle: "Morning Vibes",
    postBody:
      "Started my day with a fresh coffee and some coding. Feeling productive!",
    reactions: 5,
    tags: ["morning", "coffee", "coding"],
  },
  {
    userId: "user202",
    postTitle: "Gym Time",
    postBody: "Just finished a great workout session. Consistency is key 💪",
    reactions: 12,
    tags: ["fitness", "gym", "health"],
  },
  {
    userId: "user303",
    postTitle: "Movie Night",
    postBody: "Watching my favorite movie tonight. Any recommendations?",
    reactions: 3,
    tags: ["movies", "chill", "night"],
  },
];

export default PostListProvider;
