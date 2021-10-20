import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseModalbyEscBtn);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseModalbyEscBtn);
  }

  handleCloseModalbyEscBtn = (e) => {
    if (e.code === "Escape") {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal();
    }
  };
  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          {this.props.children}
          {/* <img src={image} alt="" /> */}
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
