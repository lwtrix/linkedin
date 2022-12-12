import React from "react";
export const ProfileInfo = () => {
  return (
    <div id="profileInfoMain">
      <div id="profileInfoBackgroundImage">
        <img
          src="https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg"
          alt="background"
        />
      </div>

      <div id="profileInfoBody">
        <div id="profileInfoPersonalImage">
          <img
            alt="profile"
            src="https://i.pinimg.com/736x/b8/7d/b9/b87db90ee0193b5d963ed688bf390dc9--old-faces-koppen.jpg"
          />
        </div>
        <h5>
          <a>Francesco Stefan</a>
        </h5>
        <p>
          Studying at Epicode school as a Fullstack Developer : React, Redux,
          JS, Dom manipulation, CSS, HTML, Bootstrap.
        </p>
      </div>
    </div>
  );
};
