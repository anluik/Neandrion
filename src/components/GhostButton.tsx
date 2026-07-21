import { cn } from "#/lib/utils";
import type { ComponentProps } from "react";

const GhostButton = ({ className, ...props }: ComponentProps<"button">) => (
    <button
        type="button"
        {...props}
        className={cn(
            "flex cursor-pointer items-center rounded-lg border border-(--line) px-2 py-1 font-mono text-[13px] text-(--text-dim) transition-all duration-250 hover:border-(--cyan) hover:text-(--cyan) hover:shadow-(--glow-cyan)",
            className
        )}
    />
);

export default GhostButton;
