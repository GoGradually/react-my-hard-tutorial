import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";

type BottomSheetProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export const BottomSheet: React.FC<BottomSheetProps> = ({ open, onClose, children }) => {
    const container = document.getElementById("bottom-sheet-root") ?? document.body;

    const [mounted, setMounted] = useState(open);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (open) {
            const mountId = requestAnimationFrame(() => {
                setMounted(true);
                const visibleId = requestAnimationFrame(() => {
                    setVisible(true);
                });
                return () => cancelAnimationFrame(visibleId);
            });

            return () => cancelAnimationFrame(mountId);
        } else {
            const hideId = requestAnimationFrame(() => {
                setVisible(false);
            });
            const timer = setTimeout(() => {
                setMounted(false);
            }, 250);
            return () => {
                cancelAnimationFrame(hideId);
                clearTimeout(timer);
            };
        }
    }, [open]);

    useEffect(() => {
        if (!mounted) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [mounted, onClose]);

    if (!mounted) return null;

    const sheet = (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 1000,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                backgroundColor: visible ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)",
                transition: "background-color 0.25s ease-out",
            }}
            onClick={onClose}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: 480,
                    background: "#fff",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    padding: 16,
                    boxShadow: "0 -4px 16px rgba(0,0,0,0.2)",
                    transform: visible ? "translateY(0)" : "translateY(100%)",
                    opacity: visible ? 1 : 0,
                    transition: "transform 0.25s ease-out, opacity 0.25s ease-out",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    style={{
                        width: 40,
                        height: 4,
                        borderRadius: 999,
                        background: "#ddd",
                        margin: "0 auto 12px",
                    }}
                />
                {children}
            </div>
        </div>
    );

    return ReactDOM.createPortal(sheet, container);
};