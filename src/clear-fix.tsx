import * as React from "react";

export type ClearFixProps = React.HTMLProps<HTMLDivElement>;
/**
 * Clear any float
 */
export const ClearFix = (xProps: ClearFixProps) => {
    const { className, ...props } = xProps;
    const augmented = className + " clearfix";
    return (
        <div  {...{className: augmented, ...props }} />
    );
};
