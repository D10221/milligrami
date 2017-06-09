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
 *
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
        className,
        ...props } = xProps;
    const cn = (className ? `${className} ` : "") + "row" +
        (isUndefinedOrFalse(rowWrap) ? "" : " row-wrap") +
        (isUndefinedOrFalse(rowNoPadding) ? "" : " row-no-padding") +
        (isUndefinedOrFalse(rowTop) ? "" : " row-top") +
        (isUndefinedOrFalse(rowBottom) ? "" : " row-bottom") +
        (isUndefinedOrFalse(rowCenter) ? "" : " row-center") +
        (isUndefinedOrFalse(rowStretch) ? "" : " row-stretch") +
        (isUndefinedOrFalse(rowBaseline) ? "" : " row-baseline");
    return (

        <div {...{ className: cn, ...props }} />
    );
};
