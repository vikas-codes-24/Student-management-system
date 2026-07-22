import { AlertTriangle } from "lucide-react";
import { Modal } from "./Modal";
import { Button } from "./Button";

function ConfirmDialog({
    isOpen,
    onClose,
    onConfirm,
    title = "Confirm action",
    description = "Are you sure you want to proceed? This action cannot be undone.",
    confirmText = "Confirm",
    cancelText = "Cancel",
    variant = "danger",
    isLoading = false,
}) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="sm">
            <div className="flex flex-col items-center text-center py-2">
                <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full mb-4 ${variant === "danger"
                            ? "bg-red-50"
                            : variant === "warning"
                                ? "bg-amber-50"
                                : "bg-blue-50"
                        }`}
                >
                    <AlertTriangle
                        className={`h-6 w-6 ${variant === "danger"
                                ? "text-danger"
                                : variant === "warning"
                                    ? "text-warning"
                                    : "text-primary-600"
                            }`}
                    />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm text-slate-500">{description}</p>
                <div className="flex items-center gap-3 mt-6 w-full">
                    <Button
                        variant="secondary"
                        onClick={onClose}
                        disabled={isLoading}
                        className="flex-1"
                    >
                        {cancelText}
                    </Button>
                    <Button
                        variant={variant === "danger" ? "danger" : "primary"}
                        onClick={onConfirm}
                        isLoading={isLoading}
                        className="flex-1"
                    >
                        {confirmText}
                    </Button>
                </div>
            </div>
        </Modal>
    );
}

export { ConfirmDialog };