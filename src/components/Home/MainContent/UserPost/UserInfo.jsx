import React from "react";
import "../../../css/main-content/user-post/user-info.css";
import { AiOutlineGlobal, AiOutlinePlus } from "react-icons/ai";

export const UserInfo = () => {
  return (
    <div className="user-info">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D03AQGQukuVemAsUQ/profile-displayphoto-shrink_100_100/0/1601570097725?e=1676505600&v=beta&t=fQFzdqM6wq82tBQ98DtFom59CwNFGJ-3oDIaJDjzszY"
        alt=""
      />
      <div className="user-details">
        <span className="user-name">Tyler Marshall</span>
        <span className="user-followers">Software Engineer</span>
        <span className="time-passed">
          <span>8h</span>
          <div className="dot" /> 
           <AiOutlineGlobal style={{ fontSize: "15px" }} />
        </span>
      </div>
    <a href="#" className="follow-btn"><AiOutlinePlus className='plus-icon' style={{fontSize: '18px'}}/>Follow</a>
    </div>
  );
};
