import * as React from "react";
export type FloatProps = React.HTMLProps<HTMLDivElement> & {
    xFloat: "left" | "right"
};
export const Float = (xProps: FloatProps) => {
    const { xFloat, className, ...props } = xProps;
    const cname = className +
        (xFloat === "left"
        ? " float-left"
        : " float-right");
    return (
        <div {...{ className: cname, ...props } } />
    );
};
