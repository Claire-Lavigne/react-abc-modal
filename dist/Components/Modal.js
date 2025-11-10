import React, { useEffect, useRef } from "react";
import closeIcon from "./close.svg";
import styles from "./Modal.module.css";
const Modal = _ref => {
  let {
    children,
    isOpen,
    setOpen,
    closeOutside = true,
    icon = true,
    classOverlay,
    classSection,
    classIconClose
  } = _ref;
  const contentRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = e => {
      if (e.key === "Escape" || e.key === "Esc") {
        e.preventDefault();
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setOpen]);

  // Focus dialog when opened (simple a11y improvement)
  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.focus();
    }
  }, [isOpen]);

  // Render nothing when closed
  if (!isOpen) return null;
  const handleOverlayMouseDown = e => {
    if (!closeOutside) return;
    // Only close if the click starts on the overlay itself
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles.overlay, " ").concat(classOverlay !== null && classOverlay !== void 0 ? classOverlay : ""),
    role: "presentation",
    "data-open": isOpen,
    onMouseDown: handleOverlayMouseDown
  }, /*#__PURE__*/React.createElement("section", {
    className: "".concat(styles.content, " ").concat(classSection !== null && classSection !== void 0 ? classSection : ""),
    ref: contentRef,
    role: "dialog",
    "aria-modal": "true",
    tabIndex: -1
  }, icon && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "".concat(styles.close, " ").concat(classIconClose !== null && classIconClose !== void 0 ? classIconClose : ""),
    onClick: () => setOpen(false),
    "aria-label": "Close modal"
  }, /*#__PURE__*/React.createElement("img", {
    src: closeIcon,
    alt: ""
  })), children));
};
export default Modal;