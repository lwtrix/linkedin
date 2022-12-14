import React from "react";
import { DiscoverMore } from "./LeftSideBar/DiscoverMore";
import { ProfileBar } from "./LeftSideBar/ProfileBar";
import "../css/homepage/leftSideBar/left-side-bar.css";
import { useEffect } from "react";
export const LeftSideBar = () => {
  /*const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  useEffect(() => {
    // Attach the event listener to the window object
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    // Get the current scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the user has scrolled to the point where you want to change the class
  };*/

  return (
    <div id="leftSideBarStyle">
      <ProfileBar />

      <DiscoverMore />
    </div>
  );
};
