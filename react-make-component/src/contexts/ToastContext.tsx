import {createContext} from "react";

export type ToastContextValue = {
    showToast: (message: string, duration?: number) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);
