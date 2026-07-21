import { toggleTheme } from "#/lib/theme";
import GhostButton from "./GhostButton";
import GlowDot from "./GlowDot";

const ThemeToggle = () => (
    <GhostButton
        onClick={toggleTheme}
        className="gap-1.75 rounded-full px-3 py-1.5 text-[11px] tracking-[0.08em]"
    >
        <GlowDot
            accent="amber"
            className="transition-all duration-400 dark:text-(--magenta)"
        />
        <span className="hidden dark:inline">
            NIGHT<span className="sr-only">, switch to day mode</span>
        </span>
        <span className="dark:hidden">
            DAY<span className="sr-only">, switch to night mode</span>
        </span>
    </GhostButton>
);

export default ThemeToggle;
