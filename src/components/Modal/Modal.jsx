import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onCloseModal, children }) {
  useEffect(() => {
    window.addEventListener("keydown", handleCloseModalbyEscBtn);

    return () => {
      window.removeEventListener("keydown", handleCloseModalbyEscBtn);
    };
  });

  const handleCloseModalbyEscBtn = (e) => {
    if (e.code === "Escape") {
      onCloseModal();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">{children}</div>
    </div>,
    modalRoot
  );
}
