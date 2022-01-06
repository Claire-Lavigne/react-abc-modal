import React, { useEffect, useRef } from "react";
import closeIcon from "./close.svg";
import styles from "./Modal.module.css";

const Modal = ({ children, isOpen, onClose, closeOutside }) => {
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    };
  });

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.show : styles.hide}`}>
      <section className={`${styles.content}`} ref={closeOutside && myRef}>
        <img
          src={closeIcon}
          alt="close modal"
          className={`${styles.close}`}
          onClick={onClose}
        />
        {children}
      </section>
    </div>
  );
};

export default Modal;
