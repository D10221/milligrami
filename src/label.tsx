import * as React from "react";
import { isUndefinedOrFalse } from "./util/is-defined";

export type LabelProps = React.HTMLProps<HTMLLabelElement> & {
    inLine?: boolean;
};
export const Label = (xProps: LabelProps) => {
    const { inLine ,className, ...props } = xProps;
    const augmented = className +
        (isUndefinedOrFalse(inLine) ? "" : " label-inline");
    return (
        <label {...{ className: augmented, ...props } } />
    );
}
