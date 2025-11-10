import React from "react";
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
declare const Modal: React.FC<ModalProps>;
export default Modal;
