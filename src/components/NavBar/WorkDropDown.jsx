import React from "react";
import { Row, Col } from "react-bootstrap";
import "../css/navBar/workDropDown.css";
export const WorkDropDown = () => {
  return (
    <div id="dropDownWork-overflow-scroll">
      <div id="dropDownWork-title-sticky">
        <div id="dropDownWork-title">
          <h4>Work</h4>
        </div>
        <div id="dropDownWork-title-x">x</div>
      </div>
      <div>
        <div className="borderGrayWork">
          <div className="dropDownWork-subtitle1">
            <h5>Work</h5>
          </div>
          <div className="flex-rowWork">
            <div className="outsideElement">
              <div className="icons">icons</div>
              <div className="text">text</div>
            </div>
            <div className="outsideElement">
              <div className="icons">icons</div>
              <div className="text">text</div>
            </div>
            <div className="outsideElement">
              <div className="icons">icons</div>
              <div className="text">text</div>
            </div>
            <div className="outsideElement">
              <div className="icons">icons</div>
              <div className="text">text</div>
            </div>
            <div className="outsideElement">
              <div className="icons">icons</div>
              <div className="text">text</div>
            </div>
            <div className="outsideElement">
              <div className="icons">icons</div>
              <div className="text">text</div>
            </div>
            <div className="outsideElement">
              <div className="icons">icons</div>
              <div className="text">text</div>
            </div>
            <div className="outsideElement">
              <div className="icons">icons</div>
              <div className="text">text</div>
            </div>
          </div>
        </div>
        <div className="borderGrayWork">
          <div className="dropDownWork-subtitle1">
            <h5>LinkedIn Company Assistence</h5>
          </div>
          <div id="list">
            <div className="list-element">
              <a>
                <h6>Talent Solutions</h6>
                <p>Find, hire</p>
              </a>
            </div>
            <div className="list-element">
              <a>
                <h6>Sales Solutions</h6>
                <p>Unlock new opportunity</p>
              </a>
            </div>
            <div className="list-element">
              <a>
                <h6>Pubblic Job Position</h6>
                <p>Get the best candidate</p>
              </a>
            </div>
            <div className="list-element">
              <a>
                <h6>Marketing Solutions</h6>
                <p>Get clients and grow your company</p>
              </a>
            </div>
            <div className="list-element">
              <a>
                <h6>Learning Solutions</h6>
                <p>Promote and get new knowlenge</p>
              </a>
            </div>
          </div>
          <div id="bottomSubtitle">
            <div>
              <h6>Generate Page</h6>
            </div>
            <div id="plus-symbol">+</div>
          </div>
        </div>
      </div>
    </div>
  );
};
