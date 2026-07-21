import GlowDot from "#/components/GlowDot";
import ShelfItem from "./ShelfItem";
import type { ExperimentGroup } from "#/experiments";

export default function ShelfGroup({
    group,
    onNavigate
}: {
    group: ExperimentGroup;
    onNavigate: () => void;
}) {
    return (
        <div>
            <div className="flex items-center gap-2 px-1.5 pb-2">
                <GlowDot accent={group.accent} />
                <span className="font-mono text-[10.5px] font-semibold tracking-[0.16em] text-(--text-dim)">
                    {group.label}
                </span>
            </div>
            <div className="flex flex-col gap-0.5">
                {group.items.map(item => (
                    <ShelfItem
                        key={item.index}
                        item={item}
                        group={group}
                        onNavigate={onNavigate}
                    />
                ))}
            </div>
        </div>
    );
}
