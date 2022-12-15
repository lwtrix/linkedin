import React from "react";
import "../../../css/main-content/start-post/create-post.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../../../../redux/actions";
import { NewPost } from "./NewPost";

export const CreatePost = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, []);
  return (
    <div className="create-post">
      {user && 
      <div className="img-container">
        <img src={user.image} />  
      </div>}
      <input type="text" placeholder="Start a post" />
      <NewPost />
    </div>
  );
};
