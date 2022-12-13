import React from "react";
import "../../../css/main-content/start-post/create-post.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../../../../redux/actions";
export const CreatePost = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, []);
  return (
    <div className="create-post">
      {user && <img src={user.image} />}
      <input type="text" placeholder="Start a post" />
    </div>
  );
};
