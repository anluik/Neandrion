import { cn } from "#/lib/utils";
import type { AccentName } from "#/experiments";

/* The dot paints itself with `bg-current`, so an accent is just a text color. */
const accentText: Record<AccentName, string> = {
    magenta: "text-(--magenta)",
    cyan: "text-(--cyan)",
    amber: "text-(--amber)"
};

const GlowDot = ({
    accent,
    title,
    className
}: {
    accent: AccentName;
    title?: string;
    className?: string;
}) => (
    <span
        title={title}
        className={cn(
            "inline-block size-1.75 shrink-0 rounded-full bg-current shadow-[0_0_8px_currentColor]",
            accentText[accent],
            className
        )}
    />
);

export default GlowDot;
