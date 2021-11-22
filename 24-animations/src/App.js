import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from "react-transition-group";
import ModalWithTransition from "./components/Modal/ModalWithTransition";
import ModalWithCSSTransition from "./components/Modal/ModalWithCSSTransition";

class App extends Component {
  state = {
    modalIsOpen: false,
    transitionModalIsOpen: false,
    cssTransitionModalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  showTransitionModal = () => {
    this.setState({ transitionModalIsOpen: true });
  };

  closeTransitionModal = () => {
    this.setState({ transitionModalIsOpen: false });
  };

  showCSSTransitionModal = () => {
    this.setState({ cssTransitionModalIsOpen: true });
  };

  closeCSSTransitionModal = () => {
    this.setState({ cssTransitionModalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("onEnter")}
          onEntering={() => console.log("onEntering")}
          onEntered={() => console.log("onEntered")}
          onExit={() => console.log("onExit")}
          onExiting={() => console.log("onExiting")}
          onExited={() => console.log("onExited")}
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exiting" || state === "entering" ? 0 : 1,
              }}
            />
          )}
        </Transition>
        <Transition
          in={this.state.modalIsOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => <Modal show={state} closed={this.closeModal} />}
        </Transition>
        {this.state.modalIsOpen && <Backdrop show />}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <br />
        <ModalWithTransition
          show={this.state.transitionModalIsOpen}
          closed={this.closeTransitionModal}
        />
        {this.state.transitionModalIsOpen && <Backdrop show />}
        <button className="Button" onClick={this.showTransitionModal}>
          Open Modal Wrapped With Transition
        </button>
        <br />
        <ModalWithCSSTransition
          show={this.state.cssTransitionModalIsOpen}
          closed={this.closeCSSTransitionModal}
        />
        {this.state.cssTransitionModalIsOpen && <Backdrop show />}
        <button className="Button" onClick={this.showCSSTransitionModal}>
          Open Modal Wrapped With CSSTransition
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
