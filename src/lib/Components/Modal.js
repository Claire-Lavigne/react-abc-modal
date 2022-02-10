import React, { useEffect, useRef } from "react";
import closeIcon from "./close.svg";
import styles from "./Modal.module.css";

const Modal = ({
  children,
  isOpen,
  icon,
  closeModal,
  closeOutside,
  classOverlay,
  classSection,
  classIconClose,
  styleOverlay,
  styleSection,
  styleIconClose,
}) => {
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (closeOutside && !myRef.current.contains(e.target)) {
      closeModal();
    }
  };

  const handleEscape = (e) => {
    if (e.key === "Escape" || e.key === "Esc") {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  });

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.show : styles.hide} ${
        classOverlay ?? null
      }`}
      style={styleOverlay ?? null}
    >
      <section
        className={`${styles.content} ${classSection ?? null}`}
        ref={closeOutside ? myRef : null}
        style={styleSection ?? null}
      >
        {icon && (
          <img
            src={closeIcon}
            alt="close modal"
            className={`${styles.close} ${classIconClose ?? null}`}
            style={styleIconClose ?? null}
            onClick={closeModal}
          />
        )}
        {children}
      </section>
    </div>
  );
};

export default Modal;
