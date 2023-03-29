import React, { useState, useEffect } from "react";
import "../../css/main-content/user-post.css";
import { PostContent } from "./UserPost/PostContent";
import { PostControls } from "./UserPost/PostControls";
import { PostDescription } from "./UserPost/PostDescription";
import { PostStats } from "./UserPost/PostStats";
import { UserInfo } from "./UserPost/UserInfo";

const UserPost = ({ post }) => {

  const [postData, setPostData] = useState(null)
  const [userData, setUserData] = useState(null)

  const getLatestPostUser = async (userId) => {
    const baseEndpoint = process.env.REACT_APP_BE_URL

    const res = await fetch(
      `${baseEndpoint}/users/${post.user}`
    );
    const data = await res.json()
    console.log(data)
    setUserData(data)
  }

  useEffect(() => {
    if(typeof post.user === 'string') {
      getLatestPostUser(post.user)
    } else {
      setUserData(post.user)
    }

    setPostData(post)
  }, [post])
  

  return (
    <div className="user-post">
      <UserInfo user={userData} />
      <PostDescription post={postData} />
      <PostContent post={postData} />
      <PostStats post={postData} />
      <PostControls post={postData} />
    </div>
  );
};

export default UserPost;
