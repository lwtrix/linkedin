import React, { useEffect } from "react";
import "../../../css/main-content/user-post/user-info.css";
import { AiOutlineGlobal, AiOutlinePlus } from "react-icons/ai";

export const UserInfo = ({ user }) => {
  console.log(typeof user.title)
  const userTitle = typeof user.title === 'string' ? user.title.trim() : "";
  const randomTimeNum = Math.floor(Math.random() * 24) + 1;

  return (
    <div className="user-info">
      <img
        src={
          user.image
            ? "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            : user.image
        }
        alt=""
      />
      <div className="user-details">
        <span className="user-name">{`${user.name} ${user.surname}`}</span>
        <span className="user-title">{userTitle}</span>
        <span className="time-passed">
          <span>{randomTimeNum === 24 ? "1d" : `${randomTimeNum}h`}</span>
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
