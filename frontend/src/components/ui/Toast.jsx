import { Toaster as SonnerToaster } from "sonner";

function Toast() {
    return (
        <SonnerToaster
            position="top-right"
            toastOptions={{
                style: {
                    background: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    color: "#0f172a",
                    fontSize: "14px",
                    padding: "12px 16px",
                },
                className: "font-sans",
            }}
            closeButton
            richColors
        />
    );
}

export { Toast };