import React from "react";

import "./Modal.css";
import { CSSTransition } from "react-transition-group";

const animationTiming = {
  enter: 400,
  exit: 1000,
};
const ModalWithCSSTransition = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      // classNames="fade-slide"
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
      }}
    >
      <div className="Modal">
        <h1>A modal wrapped with CSSTransition component</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default ModalWithCSSTransition;
