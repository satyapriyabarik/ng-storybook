import React, { ReactNode } from "react";
type ToastType = "success" | "error" | "info" | "loading";
type ToastPosition = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
interface ToastContextProps {
    addToast: (message: string, type?: ToastType, duration?: number, position?: ToastPosition) => number;
    removeToast: (id: number) => void;
}
interface ToastProviderProps {
    children: ReactNode;
    /** Default toast position for all toasts */
    position?: ToastPosition;
}
export declare const ToastProvider: React.FC<ToastProviderProps>;
export declare const useToast: () => ToastContextProps;
export default ToastProvider;
