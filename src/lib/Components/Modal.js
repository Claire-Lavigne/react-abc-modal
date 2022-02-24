import React, { useEffect, useRef } from "react";
import closeIcon from "./close.svg";
import styles from "./Modal.module.css";

const Modal = ({
  children,
  icon,
  isOpen,
  setOpen,
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
    if (isOpen && closeOutside && !myRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const handleEscape = (e) => {
    if ((isOpen && e.key === "Escape") || e.key === "Esc") {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
            onClick={() => setOpen(false)}
          />
        )}
        {children}
      </section>
    </div>
  );
};

export default Modal;
