import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../css/navBar/navBar.css";
import { AiFillHome } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import { IoNotificationsSharp } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { YouDropDown } from "./YouDropDown";
import { WorkDropDown } from "./WorkDropDown";
import { useState, useEffect } from "react";
export const NavBar = () => {
  const [youDropDown, setyouDropDown] = useState("off");
  const [workDropDown, setworkDropDown] = useState("off");

  return (
    <Navbar expand="lg" id="navBar">
      <Container fluid>
        <div className="navBarDisplayFlex">
          <Link href="#">
            <img
              id="navBarLogo"
              alt="linkedin-logo"
              src="https://th.bing.com/th/id/R.be68438baf34312fb5f2683e13dd0551?rik=kblECYrU2iHeVA&pid=ImgRaw&r=0"
            />
          </Link>

          <div className="navBarIcons">
            <div className="navBarIcons-icon">
              <Link href="#action1">
                <ImSearch />
              </Link>
            </div>
            <div className="navBarIcons-text">Search</div>
          </div>
        </div>
        <div className="navBarDisplayFlex">
          <div className="navBarIcons">
            <div className="navBarIcons-icon">
              <Link href="#action1">
                <AiFillHome />
              </Link>
            </div>
            <div className="navBarIcons-text">Home</div>
          </div>
          <div className="navBarIcons">
            <div className="navBarIcons-icon">
              <Link href="#action2">
                <MdPeopleAlt />
              </Link>
            </div>
            <div className="navBarIcons-text">Web</div>
          </div>
          <div className="navBarIcons">
            <div className="navBarIcons-icon">
              <Link href="#action1">
                <MdWork />
              </Link>
            </div>
            <div className="navBarIcons-text">Work</div>
          </div>
          <div className="navBarIcons">
            <div className="navBarIcons-icon">
              <Link href="#action2">
                <TbMessageCircle />
              </Link>
            </div>
            <div className="navBarIcons-text">Message</div>
          </div>
          <div className="navBarIcons">
            <div className="navBarIcons-icon">
              <Link href="#action1">
                <IoNotificationsSharp />
              </Link>
            </div>
            <div className="navBarIcons-text">Notifications</div>
          </div>
          <div className="navBarIcons" id="youPositionRelative">
            <div className="navBarIcons-icon imageContainer mt-2">
              <Link href="#action1" classname="imageContainer">
                <img
                  alt="profile"
                  src="https://i.pinimg.com/736x/b8/7d/b9/b87db90ee0193b5d963ed688bf390dc9--old-faces-koppen.jpg"
                />
              </Link>
            </div>
            <div className="navBarIcons-text">
              You
              <IoMdArrowDropdown
                onClick={(e) => {
                  youDropDown !== "on"
                    ? setyouDropDown("on")
                    : setyouDropDown("off");
                }}
              />
            </div>
            {youDropDown !== "off" ? (
              <div id="youDropdown">
                <YouDropDown />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="navBarDisplayFlex" id="navBarWorkRightSide">
            <div className="navBarIcons">
              <div className="navBarIcons-icon">
                <Link href="#action1">
                  <BsFillGrid3X3GapFill />
                </Link>
              </div>
              <div className="navBarIcons-text">
                Work
                <IoMdArrowDropdown
                  onClick={(e) => {
                    workDropDown !== "on"
                      ? setworkDropDown("on")
                      : setworkDropDown("off");
                  }}
                />
              </div>
            </div>
            <div className="navBarIcons" id="navBarTextOrange">
              <div className="navBarIcons-icon">
                <Link href="#action1">Try Premium</Link>
              </div>
              <div className="navBarIcons-text"></div>
              {workDropDown !== "off" ? (
                <div id="workDropDown">
                  <WorkDropDown />
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};
