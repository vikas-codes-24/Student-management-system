import { createContext, useContext, useState, useCallback } from "react";

const SidebarContext = createContext(undefined);

export function SidebarProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggleCollapse = useCallback(() => setIsCollapsed((prev) => !prev), []);

    return (
        <SidebarContext.Provider
            value={{ isOpen, isCollapsed, toggle, open, close, toggleCollapse }}
        >
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
}