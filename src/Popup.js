import React from "react";
import "./Popus.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          {" "}
          X
        </button>
        <div className="ab">
          <div>{props.children}</div>
          <div className="imageContainer">
            <img src="./images.png" alt="Popup Image" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
