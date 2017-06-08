/// <reference types="react" />
import * as React from "react";
export declare type RowProps = React.HTMLProps<HTMLDivElement> & {
    rowWrap?: boolean;
    rowNoPadding?: boolean;
    rowTop?: boolean;
    rowBottom?: boolean;
    rowCenter?: boolean;
    rowStretch?: boolean;
    rowBaseline?: boolean;
};
/**
 *
 */
export declare const Row: (xProps: RowProps) => JSX.Element;
