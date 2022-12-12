import React from "react";
import { DiscoverMore } from "./LeftSideBar/DiscoverMore";
import { ProfileBar } from "./LeftSideBar/ProfileBar";
import "../css/homepage/leftSideBar/left-side-bar.css";
export const LeftSideBar = () => {
  return (
    <div id="leftSideBarStyle">
      <ProfileBar />

      <DiscoverMore />
    </div>
  );
};
