import { cn } from "../../utils";
import { Card } from "../common/Card";

function WelcomeBanner({
    className,
    title = "Welcome back!",
    description = "Here's what's happening with your institution today.",
    ...props
}) {
    return (
        <Card
            className={cn(
                "bg-gradient-to-br from-primary-600 to-primary-800 border-0 text-white p-6",
                className
            )}
            padding={false}
            {...props}
        >
            <div className="p-6">
                <h1 className="text-xl font-bold tracking-tight">{title}</h1>
                <p className="mt-1 text-sm text-primary-100">{description}</p>
            </div>
        </Card>
    );
}

export { WelcomeBanner };