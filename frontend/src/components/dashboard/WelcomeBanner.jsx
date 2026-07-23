import { motion } from "framer-motion";
import { cn } from "../../utils";

function WelcomeBanner({
    className,
    title = "Welcome back!",
    description = "Here's what's happening with your institution today.",
    instituteName = "Springfield Institute",
    stats = [
        { label: "Active Students", value: "1,234" },
        { label: "Teachers", value: "48" },
        { label: "Classes", value: "24" },
    ],
    ...props
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={cn(
                "relative overflow-hidden rounded-2xl gradient-hero p-[1px] shadow-xl shadow-indigo-500/10",
                className
            )}
            {...props}
        >
            <div className="relative rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 p-6 lg:p-8 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl" />
                <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-white/20" />
                <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-white/10" />
                <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-white/15" />

                <div className="relative flex items-center gap-8 lg:gap-16">
                    {/* Left Content */}
                    <div className="flex-1 min-w-0">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-xs font-medium text-white/80 mb-4">
                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                System is operational
                            </div>
                            <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                                {title}
                            </h1>
                            <p className="mt-2 text-lg font-semibold text-white/90">
                                {instituteName}
                            </p>
                            <p className="mt-1 text-sm text-indigo-200 max-w-lg">
                                {description}
                            </p>
                        </motion.div>

                        {/* Quick Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="mt-5 flex flex-wrap gap-4 sm:gap-6"
                        >
                            {stats.map((stat, i) => (
                                <div key={stat.label} className="flex items-center gap-2.5">
                                    <div className="h-8 w-[2px] rounded-full bg-white/20" />
                                    <div>
                                        <p className="text-xl font-bold text-white">{stat.value}</p>
                                        <p className="text-xs text-indigo-200">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right SVG Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="hidden lg:block flex-shrink-0"
                    >
                        <svg width="280" height="200" viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* School Building */}
                            <rect x="60" y="60" width="120" height="100" rx="4" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
                            <rect x="72" y="72" width="36" height="28" rx="2" fill="white" fillOpacity="0.1" />
                            <rect x="72" y="72" width="36" height="28" rx="2" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
                            <rect x="72" y="108" width="36" height="28" rx="2" fill="white" fillOpacity="0.1" />
                            <rect x="72" y="108" width="36" height="28" rx="2" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
                            <rect x="116" y="72" width="36" height="28" rx="2" fill="white" fillOpacity="0.1" />
                            <rect x="116" y="72" width="36" height="28" rx="2" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
                            <rect x="116" y="108" width="36" height="28" rx="2" fill="white" fillOpacity="0.1" />
                            <rect x="116" y="108" width="36" height="28" rx="2" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
                            {/* Door */}
                            <rect x="105" y="130" width="22" height="30" rx="2" fill="white" fillOpacity="0.2" />
                            {/* Roof */}
                            <polygon points="60,60 120,25 180,60" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
                            {/* Clock on roof */}
                            <circle cx="120" cy="58" r="6" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
                            <line x1="120" y1="58" x2="120" y2="54" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="120" y1="58" x2="123" y2="58" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />

                            {/* Flag */}
                            <line x1="120" y1="25" x2="120" y2="10" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" />
                            <polygon points="120,10 140,15 120,20" fill="white" fillOpacity="0.2" />

                            {/* Graduation Cap */}
                            <g transform="translate(200, 30)">
                                <polygon points="0,10 30,0 60,10 30,20" fill="white" fillOpacity="0.2" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
                                <rect x="12" y="10" width="6" height="16" rx="1" fill="white" fillOpacity="0.15" />
                                <rect x="12" y="24" width="18" height="4" rx="1" fill="white" fillOpacity="0.2" />
                                {/* Tassel */}
                                <line x1="30" y1="10" x2="36" y2="0" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />
                                <circle cx="37" cy="-1" r="2" fill="white" fillOpacity="0.3" />
                            </g>

                            {/* Book stack */}
                            <g transform="translate(30, 90)">
                                <rect x="0" y="20" width="30" height="6" rx="1" fill="white" fillOpacity="0.2" />
                                <rect x="2" y="14" width="26" height="6" rx="1" fill="white" fillOpacity="0.15" />
                                <rect x="4" y="8" width="22" height="6" rx="1" fill="white" fillOpacity="0.2" />
                                <rect x="6" y="2" width="18" height="6" rx="1" fill="white" fillOpacity="0.15" />
                            </g>

                            {/* Star decorations */}
                            <g opacity="0.3">
                                <polygon points="210,80 212,86 218,86 213,90 215,96 210,92 205,96 207,90 202,86 208,86" fill="white" />
                                <polygon points="50,40 51,43 54,43 52,45 53,48 50,46 47,48 48,45 46,43 49,43" fill="white" />
                                <polygon points="230,120 231,123 234,123 232,125 233,128 230,126 227,128 228,125 226,123 229,123" fill="white" />
                            </g>

                            {/* Floating abstract circles */}
                            <circle cx="250" cy="160" r="20" fill="white" fillOpacity="0.05" />
                            <circle cx="260" cy="150" r="8" fill="white" fillOpacity="0.08" />
                            <circle cx="30" cy="170" r="12" fill="white" fillOpacity="0.05" />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export { WelcomeBanner };