import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, children, type = "default" }) => {
  if (!isOpen) return null;

  const modalClass = `modal-container ${type}`;

  return (
    <div className="modal-overlay">
      <div className={modalClass}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
