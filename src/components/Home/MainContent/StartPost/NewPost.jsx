import React from "react";
import "../../../css/main-content/start-post/new-post.css";
import { BsX } from "react-icons/bs";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { BsEmojiSmile, BsFillPlayBtnFill } from "react-icons/bs";
import { BiImage, BiDotsHorizontalRounded } from "react-icons/bi";
import { HiDocumentText } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";
export const NewPost = () => {
  return (
    <div className="new-post">
      <div className="creating-post">
        <p>Create Post</p>
        <BsX className="icon-x" />
      </div>
      <div className="profile-info">
        <img
          src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"
          alt="photo_profile"
        />
        <div className="name">
          <p>Armando Hernandez </p>

          <button className="can-see">
            <BiWorld className="icon-wold" />
            Anyone
            <AiOutlineCaretDown className="icon-wold" />
          </button>
        </div>
      </div>
      <div className="talk-about">
        <input
          id="input"
          type="text"
          placeholder="What do you want to talk about?"
        />
      </div>
      <div className="hashtag d-flex">
        <div className="moji">
          <BsEmojiSmile className="emoji" />
        </div>
        <a href="#" className="add-hashtag">
          <span>Add hashtag</span>
        </a>
      </div>
      <div className="add-to-your-post d-flex">
        <div className="extra">
          <BiImage className="extra-icons-post" />
          <BsFillPlayBtnFill className="extra-icons-post" />
          <HiDocumentText className="extra-icons-post" />
          <BiDotsHorizontalRounded className="extra-icons-post" />
        </div>

        <div className="submiting">
          <MdOutlineWatchLater className="extra-icons-post" />
          <button>Post</button>
        </div>
      </div>
    </div>
  );
};
