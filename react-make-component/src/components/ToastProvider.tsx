import {useCallback, useState} from "react";
import ReactDOM from "react-dom";
import type {ToastContextValue} from "../contexts/ToastContext.tsx";
import {ToastContext} from "../contexts/ToastContext.tsx";

type Toast = {
    id: number;
    message: string;
    duration?: number;
}

type ToastProviderProps = {
    children: React.ReactNode;
};




export function ToastProvider({children}: ToastProviderProps) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = useCallback((message: string, duration = 3000) => {
        const id = Date.now();
        setToasts((prev) => [...prev, {id, message, duration}]);

        setTimeout(() => {
            setToasts((prev)=> prev.filter((t) => t.id !== id));
        }, duration);
    }, []);

    const value: ToastContextValue = {showToast};

    const toastList = (
        <div
            style={{
                position: "fixed",
                top: 16,
                right: 16,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                zIndex: 2000,
            }}
            >
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        color: "#fff",
                        padding: "8px 12px",
                        borderRadius: 4,
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                        fontSize: "14px",
                    }}
                >
                    {toast.message}
                </div>
                ))}
        </div>
    );

    return (
        <ToastContext.Provider value={value}>
            {children}
            {ReactDOM.createPortal(toastList, document.body)}
        </ToastContext.Provider>
    );
}