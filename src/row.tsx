import * as React from "react";
import { isDefined } from "./util/is-defined";

export type RowProps = React.HTMLProps<HTMLDivElement> & {
    xwrap?: boolean
};

export const Row = (xProps: RowProps) => {
    const { xwrap, ...props } = xProps;
    const className = "row" +
        (!isDefined(xwrap) ? "" : " row-wrap");
    return (

        <div {...{ className, ...props }} />
    );
};

