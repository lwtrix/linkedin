import React, { useState, useEffect } from "react";
import "../../css/main-content/user-post.css";
import { PostContent } from "./UserPost/PostContent";
import { PostControls } from "./UserPost/PostControls";
import { PostDescription } from "./UserPost/PostDescription";
import { PostStats } from "./UserPost/PostStats";
import { UserInfo } from "./UserPost/UserInfo";

const UserPost = ({user}) => {

  return (
    <div className="user-post">
      <UserInfo user={user}/>
      <PostDescription />
      <PostContent />
      <PostStats />
      <PostControls />
    </div>
  );
};

export default UserPost;
