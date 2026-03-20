declare module "gsap" {
    export interface GSAPAnimation {
        kill: () => void;
    }

    export interface GSAPDraggableVars {
        type: string;
        inertia: boolean;
        bounds?: { minX: number; maxX: number };
        dragResistance?: number;
        edgeResistance?: number;
        onDrag?: () => void;
    }

    export const gsap: {
        to: (target: Element | null, vars: object) => GSAPAnimation;
        registerPlugin: (plugin: typeof Draggable) => void;
    };

    export interface DraggableInstance extends Draggable {
        kill: () => void;
    }

    export class Draggable {
        kill(): void;
        static create(
            target: Element,
            vars: GSAPDraggableVars,
        ): DraggableInstance[];
    }
}

declare module "gsap/Draggable" {
    export * from "gsap";
}
