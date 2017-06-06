import * as React from "react";
import { isDefined } from "./util/is-defined";

export type ColumnProps = React.HTMLProps<HTMLDivElement> & {
    xWidth?: 10 | 20 | 25 | 33 | 40 | 50 | 60 | 66 | 75 | 80 | 90,
    offset?: 10 | 20 | 25 | 33 | 40 | 50 | 60 | 66 | 75 | 80 | 90,
    xspan?: boolean
};
export const Column = (xProps: ColumnProps) => {
    const { xspan, xWidth, offset, ...props } = xProps;
    const className = "column" + 
        (!xWidth ? "" : ` column-${xWidth}`) +
        (!offset ? "" : ` column-offset-${offset}`);
    return isDefined(xspan) 
    ? (
        <span  {...{className, ...props} }/>
    ) 
    : (
        <div  {...{className, ...props} }/>
    );
}