import React from "react";
import "../../../css/main-content/user-post/post-stats.css";
import { FaThumbsUp } from "react-icons/fa";

export const PostStats = () => {
  return (
    <div className="post-stats">
      <div className="likes-container">
        <div className="icon-container">
          <FaThumbsUp className="icon" />
        </div>
        <span className="likes-count">348</span>
      </div>
      <div className="comments-container">
        <span className="text">68 comments</span>
      </div>
    </div>
  );
};
