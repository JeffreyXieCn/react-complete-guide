import React from "react";

import "./Modal.css";
import { Transition } from "react-transition-group";

const animationTiming = {
  enter: 400,
  exit: 1000,
};
const ModalWithTransition = (props) => {
  return (
    <Transition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
    >
      {(state) => {
        let transition = null;
        if (state === "entering") {
          transition = "ModalOpen";
        } else if (state === "exiting") {
          transition = "ModalClosed";
        }

        const cssClasses = ["Modal", transition];

        return (
          <div className={cssClasses.join(" ")}>
            <h1>A modal wrapped with transition component</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default ModalWithTransition;
