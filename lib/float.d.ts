/// <reference types="react" />
import * as React from "react";
export declare type FloatProps = React.HTMLProps<HTMLDivElement> & {
    xFloat: "left" | "right";
};
export declare const Float: (xProps: FloatProps) => JSX.Element;
