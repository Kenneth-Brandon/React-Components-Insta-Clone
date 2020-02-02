//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  console.log("the props", props);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {props.postData.map(post => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default PostsPage;
