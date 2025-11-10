import React, { useEffect, useRef } from "react";
import closeIcon from "./close.svg";
import styles from "./Modal.module.css";

export interface ModalProps {
  /** Controls whether the modal is visible */
  isOpen: boolean;

  /** Function to update open state (true/false) */
  setOpen: (open: boolean) => void;

  /** Close when user clicks overlay (default: true) */
  closeOutside?: boolean;

  /** Show close icon button (default: true) */
  icon?: boolean;

  /** Custom classes */
  classOverlay?: string;
  classSection?: string;
  classIconClose?: string;

  /** Modal content */
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  setOpen,
  closeOutside = true,
  icon = true,
  classOverlay,
  classSection,
  classIconClose,
}) => {
  const contentRef = useRef<HTMLElement | null>(null);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
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

  const handleOverlayMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!closeOutside) return;
    // Only close if the click starts on the overlay itself
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  return (
    <div
      className={`${styles.overlay} ${classOverlay ?? ""}`}
      role="presentation"
      data-open={isOpen}
      onMouseDown={handleOverlayMouseDown}
    >
      <section
        className={`${styles.content} ${classSection ?? ""}`}
        ref={contentRef as React.RefObject<HTMLElement>}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        {icon && (
          <button
            type="button"
            className={`${styles.close} ${classIconClose ?? ""}`}
            onClick={() => setOpen(false)}
            aria-label="Close modal"
          >
            <img src={closeIcon} alt="" />
          </button>
        )}
        {children}
      </section>
    </div>
  );
};

export default Modal;
