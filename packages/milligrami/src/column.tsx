import * as React from "react";

export type ColumnProps = React.HTMLProps<HTMLDivElement> & {
    columnWidth?: 10 | 20 | 25 | 33 | 40 | 50 | 60 | 66 | 75 | 80 | 90,
    offset?: 10 | 20 | 25 | 33 | 40 | 50 | 60 | 66 | 75 | 80 | 90,
};
/**
 * a <div/> column
 */
export const Column = (xProps: ColumnProps) => {
    const {
       className,
        columnWidth,
        offset,
        ...props } = xProps;
    const cn = (className ? `${className} ` : "") +
        "column" +
        (!columnWidth ? "" : ` column-${columnWidth}`) +
        (!offset ? "" : ` column-offset-${offset}`);
    return (<div  {...{ className: cn, ...props } } />);
};
/**
 * same as @see {Column} but with a <sapn/> instead of a <div/>
 */
export const ColumnSpan = (xProps: ColumnProps) => {
    const {
       className,
        columnWidth,
        offset,
        ...props } = xProps;
    const cn = (className ? `${className} ` : "") +
        "column" +
        (!columnWidth ? "" : ` column-${columnWidth}`) +
        (!offset ? "" : ` column-offset-${offset}`);
    return <span  {...{ className: cn, ...props } } />;
};
