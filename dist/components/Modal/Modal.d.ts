import React from "react";
interface ModalProps {
    show: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
