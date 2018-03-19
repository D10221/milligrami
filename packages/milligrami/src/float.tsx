import * as React from "react";
import { warn } from "./util";
export type FloatProps = React.HTMLProps<HTMLDivElement> & {
    direction?: "left" | "right";
    left?: boolean,
    right?: boolean,
};

/**
 * TODO: HOC
 */
export const Float = (xProps: FloatProps) => {
    const { left, right, direction, className, ...props } = xProps;

    const cname = (className ? `${className} ` : "") +
        (
            left ? "float-left" : ""
        ) +
        (
            right ? "float-right" : ""
        ) +
        (
            direction === "left" ? "float-left" : ""
        ) +
        (
            direction === "right" ? "float-right" : ""
        );

    if (left && right || ((left || right) && direction)) {
        warn(`what are you trying to do ? ${cname}`);
    }

    return (
        <div {...{ className: cname, ...props } } />
    );
};
