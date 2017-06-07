import * as React from "react";
import { isUndefinedOrFalse } from "./util/is-defined";

export type RowProps = React.HTMLProps<HTMLDivElement> & {
    rowWrap?: boolean,
    rowNoPadding?: boolean,
    rowTop?: boolean,
    rowBottom?: boolean,
    rowCenter?: boolean,
    rowStretch?: boolean,
    rowBaseline?: boolean
};

/**
 * xwrap
 * row-no-padding
 * row-top
 * row-bottom
 * row-center
 * row-stretch
 * row-baseline
 */
export const Row = (xProps: RowProps) => {
    const {
        rowWrap,
        rowNoPadding,
        rowTop,
        rowBottom,
        rowCenter,
        rowStretch,
        rowBaseline,
        ...props } = xProps;
    const className = "row" +
        (!isUndefinedOrFalse(rowWrap) ? "" : " row-wrap") +
        (!isUndefinedOrFalse(rowNoPadding) ? "" : " row-no-padding") +
        (!isUndefinedOrFalse(rowTop) ? "" : " row-top") +
        (!isUndefinedOrFalse(rowBottom) ? "" : " row-bottom") +
        (!isUndefinedOrFalse(rowCenter) ? "" : " row-center") +
        (!isUndefinedOrFalse(rowStretch) ? "" : " row-stretch") +
        (!isUndefinedOrFalse(rowStretch) ? "" : " row-baseline");
    return (

        <div {...{ className, ...props }} />
    );
};

