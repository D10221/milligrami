/// <reference types="react" />
import * as React from "react";
export declare type ColumnProps = React.HTMLProps<HTMLDivElement> & {
    columnWidth?: 10 | 20 | 25 | 33 | 40 | 50 | 60 | 66 | 75 | 80 | 90;
    offset?: 10 | 20 | 25 | 33 | 40 | 50 | 60 | 66 | 75 | 80 | 90;
};
/**
 * a <div/> column
 */
export declare const Column: (xProps: ColumnProps) => JSX.Element;
/**
 * same as @see {Column} but with a <sapn/> instead of a <div/>
 */
export declare const ColumnSpan: (xProps: ColumnProps) => JSX.Element;
