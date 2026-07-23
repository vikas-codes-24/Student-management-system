import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { SuperAdminSidebar } from "../components/layout/SuperAdminSidebar";
import { Navbar } from "../components/layout/Navbar";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { cn } from "../utils";

const pageVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

function SuperAdminLayout() {
    const isMobile = useMediaQuery("(max-width: 1023px)");
    const location = useLocation();

    return (
        <div className="flex h-screen overflow-hidden bg-surface">
            <SuperAdminSidebar />
            <div
                className={cn(
                    "flex flex-1 flex-col overflow-hidden transition-all duration-300",
                    !isMobile && "lg:pl-64"
                )}
            >
                <Navbar />
                <main className="flex-1 overflow-y-auto px-4 py-6 lg:px-8 lg:py-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}

export { SuperAdminLayout };