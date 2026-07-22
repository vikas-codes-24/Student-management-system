import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils";

const sideVariants = {
    left: {
        hidden: { x: "-100%" },
        visible: { x: 0 },
        exit: { x: "-100%" },
    },
    right: {
        hidden: { x: "100%" },
        visible: { x: 0 },
        exit: { x: "100%" },
    },
};

function Drawer({
    isOpen,
    onClose,
    title,
    children,
    side = "right",
    size = "md",
    showClose = true,
    className,
}) {
    const sizes = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        full: "max-w-full",
    };

    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === "Escape" && onClose) onClose();
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
                <div className="fixed inset-0 z-50 flex">
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className={cn(
                            "relative ml-auto h-full w-full bg-white shadow-xl border-l border-slate-200",
                            sizes[size]
                        )}
                        variants={sideVariants[side]}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
                    >
                        {(title || showClose) && (
                            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                                <h2 className="text-lg font-semibold text-slate-900">
                                    {title}
                                </h2>
                                {showClose && (
                                    <button
                                        onClick={onClose}
                                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                )}
                            </div>
                        )}
                        <div className="overflow-y-auto h-[calc(100%-65px)] p-5">
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

export { Drawer };