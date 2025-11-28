import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};


function Modal({isOpen, onClose, children}: ModalProps) {
    useEffect(() => {
        if (!isOpen) { return; }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const modalContent = (
        <div
            style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
            }}
            onClick={onClose}
        >
            <div
                style={{
                    backgroundColor: "#fff",
                    padding: "16px 24px",
                    borderRadius: "8px",
                    minWidth: 300,
                    maxWidth: "90vw",
                    maxHeight: "80vh",
                    overflow: "auto",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                onClick={onClose}
                style={{float: "right", border: "none", background: "none", cursor: "pointer"}}
                > x </button>
                {children}
            </div>
        </div>
    );
    return ReactDOM.createPortal(modalContent, document.body);
}
export default Modal;