import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils";

const sizes = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-[95vw]",
};

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", duration: 0.4, bounce: 0.3 },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 10,
        transition: { duration: 0.15 },
    },
};

function Modal({
    isOpen,
    onClose,
    title,
    description,
    children,
    size = "md",
    showClose = true,
    closeOnOverlay = true,
    className,
}) {
    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === "Escape" && onClose) {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={closeOnOverlay ? onClose : undefined}
                    />
                    <motion.div
                        className={cn(
                            "relative w-full bg-white rounded-2xl shadow-xl border border-slate-200",
                            sizes[size],
                            "max-h-[85vh] overflow-y-auto",
                            className
                        )}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {(title || showClose) && (
                            <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-slate-100">
                                <div className="flex-1 pr-4">
                                    {title && (
                                        <h2 className="text-lg font-semibold text-slate-900">
                                            {title}
                                        </h2>
                                    )}
                                    {description && (
                                        <p className="mt-1 text-sm text-slate-500">{description}</p>
                                    )}
                                </div>
                                {showClose && (
                                    <button
                                        onClick={onClose}
                                        className="flex-shrink-0 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                )}
                            </div>
                        )}
                        <div className="px-6 py-4">{children}</div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

export { Modal };