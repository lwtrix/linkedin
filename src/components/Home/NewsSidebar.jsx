import React from "react";
import { Advertising } from "./NewsSideBar/Advertising/Advertising";
import { Follow } from "./NewsSideBar/Follow/Follow";
import { Footer } from "./NewsSideBar/Footer/Footer";

export const NewsSidebar = () => {
  return (
    <div className="newsSideBar">
      <Follow />
      <Advertising />
      <Footer />
    </div>
  );
};
