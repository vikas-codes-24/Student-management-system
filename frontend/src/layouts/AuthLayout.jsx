import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

function AuthLayout() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 py-12">
            <div className="mb-8 flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 shadow-sm">
                    <span className="text-lg font-bold text-white">S</span>
                </div>
                <span className="text-xl font-semibold text-slate-900">SMP</span>
            </div>
            <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                className="w-full max-w-md"
            >
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                    <Outlet />
                </div>
            </motion.div>
        </div>
    );
}

export { AuthLayout };