import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/messagebar/messagebar.css";
import { RxDotsHorizontal } from "react-icons/rx";
import { TfiPencilAlt } from "react-icons/tfi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFilterLeft } from "react-icons/bs";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
const MessageBar = () => {
  const [arrow, setArrow] = useState("off");
  return (
    <div id={arrow !== "off" ? "messageBar" : "messageBar1"}>
      <div className="messageBarFlex" id="messageBarTitle">
        <div className="messageBarFlex">
          <div id="messageBarImage">
            <img
              src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0"
              alt="image"
            />
          </div>
          <div>
            <h5>Message</h5>
          </div>
        </div>
        <div className="messageBarFlex" id="icons">
          <div className="icon">
            <RxDotsHorizontal />
          </div>
          <div className="icon">
            <TfiPencilAlt />
          </div>
          <div
            className="icon"
            onClick={(e) => {
              arrow !== "on" ? setArrow("on") : setArrow("off");
            }}
          >
            {arrow !== "on" ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
          </div>
        </div>
      </div>
      <div id="messageBarMain">
        <div id="messageBarSearch" className="messageBarFlex">
          <div className="messageBarFlex">
            <div className="icon">
              <BiSearchAlt2 />
            </div>
            <div>
              <input type="search" placeholder="Search message" />
            </div>
          </div>
          <div className="messageBarFlex">
            <BsFilterLeft />
          </div>
        </div>

        <div className="messageBarFlex singleChat">
          <div className="chatImage">
            <img
              src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0"
              alt="image"
            />
          </div>
          <div className="chatContent">
            <div className="messageBarFlex-chat">
              <div>
                <h6 className="mb-1 mt-2">Diane Chiang</h6>
              </div>
              <div className="date">date</div>
              <div className="none">
                <RxDotsHorizontal />
              </div>
            </div>
            <p>
              Diane: hi My name is Diane: hi My name is Diane: hi My name is
              .................................................................
            </p>
          </div>
        </div>
        <div className="messageBarFlex singleChat">
          <div className="chatImage">
            <img
              src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0"
              alt="image"
            />
          </div>
          <div className="chatContent">
            <div className="messageBarFlex-chat">
              <div>
                <h6 className="mb-1 mt-2">Diane Chiang</h6>
              </div>
              <div className="date">date</div>
              <div className="none">
                <RxDotsHorizontal />
              </div>
            </div>
            <p>
              Diane: hi My name is Diane: hi My name is Diane: hi My name is
              .................................................................
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBar;
