import React from "react";
import "../../../css/main-content/user-post/user-info.css";
import { AiOutlineGlobal, AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserProfile } from "../../../../redux/actions";
export const UserInfo = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, []);
  return (
    <div className="user-info">
      {user && <img src={user.image} alt="" />}
      <div className="user-details">
        <span className="user-name">Tyler Marshall</span>
        <span className="user-followers">Software Engineer</span>
        <span className="time-passed">
          <span>8h</span>
          <div className="dot" />
          <AiOutlineGlobal style={{ fontSize: "15px" }} />
        </span>
      </div>
      <a href="#" className="follow-btn">
        <AiOutlinePlus className="plus-icon" style={{ fontSize: "18px" }} />
        Follow
      </a>
    </div>
  );
};
