import React from "react";
import { Row, Col } from "react-bootstrap";
import "../css/navBar/youDropDown.css";
export const YouDropDown = () => {
  return (
    <div>
      <div className="borderGray">
        <h5>
          <a>Francesco Stefan</a>
        </h5>
        <p>
          Studying at Epicode school as a Fullstack Developer : React, Redux,
          JS, Dom manipulation, CSS, HTML, Bootstrap.
        </p>
      </div>
      <div className="borderGray">
        <h5>Account</h5>
        <div className="flex-row">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                fill="#f8c77e"
              ></path>
              <path
                d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                fill="#e7a33e"
              ></path>
            </svg>
          </div>
          <div>
            <a href="">try Premium for free</a>
          </div>
        </div>
        <div>Settings and Privacy</div>
        <div>Guide</div>
        <div>Language</div>
      </div>
      <div className="borderGray">
        <div>Handle</div>
        <div>Post and Activity</div>

        <div>Account</div>
      </div>
      <div className="borderGray" id="no-border">
        Exit
      </div>
    </div>
  );
};
