/// <reference types="react" />
import * as React from "react";
export declare type LabelProps = React.HTMLProps<HTMLLabelElement> & {
    inLine?: boolean;
};
export declare const Label: (xProps: LabelProps) => JSX.Element;
