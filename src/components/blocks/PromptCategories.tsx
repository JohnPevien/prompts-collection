import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";
import { cn } from "@src/lib/utils";
import { PROMPT_CATEGORIES } from "@src/constants";
import { Link } from "react-router-dom";
import { useRef } from "react";

gsap.registerPlugin(
    Draggable as unknown as { prototype: typeof gsap.Draggable },
);

type Props = {
    className?: string;
};

export default function PromptCategories({ className }: Props) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const bounds = container.getBoundingClientRect();
        const maxScroll = container.scrollWidth - bounds.width;

        const draggable = Draggable.create(container, {
            type: "x" as const,
            inertia: true,
            bounds: { minX: -maxScroll, maxX: 0 },
            dragResistance: 0.5,
            edgeResistance: 0.7,
            onDrag: function () {
                gsap.to(container, {
                    duration: 0.5,
                    overwrite: true,
                    ease: "power2.out",
                });
            },
        })[0];

        return () => {
            draggable?.kill();
        };
    }, []);

    return (
        <div className={cn("relative", className)}>
            <div
                ref={scrollContainerRef}
                className="w-full overflow-x-auto whitespace-nowrap flex flex-nowrap mb-5 cursor-grab active:cursor-grabbing touch-none"
            >
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                {PROMPT_CATEGORIES.map((category) => (
                    <Link
                        key={category}
                        to={
                            category === "All"
                                ? "/"
                                : `/${category.toLowerCase()}`
                        }
                        className="bg-gray-200 rounded-lg px-2 text-xs h-8 inline-flex items-center flex-none whitespace-nowrap hover:bg-gray-300 min-w-max mr-2"
                    >
                        {category}
                    </Link>
                ))}
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            </div>
        </div>
    );
}
