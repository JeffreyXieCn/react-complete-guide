import React from "react";

import "./Modal.css";

const modal = (props) => {
  let transition = null;
  if (props.show === "entering") {
    transition = "ModalOpen";
  } else if (props.show === "exiting") {
    transition = "ModalClosed";
  }

  const cssClasses = ["Modal", transition];

  return (
    <div className={cssClasses.join(" ")}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
