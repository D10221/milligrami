import * as React from "react";

export type ClearFixProps = React.HTMLProps<HTMLDivElement>;

/**
 * Clear any float
 * TODO: HOC
 */
const ClearFix = (xProps: ClearFixProps) => {
    const { className, ...props } = xProps;
    const augmented = (className ? `${className} ` : "" ) + " clearfix";
    return (
        <div  {...{className: augmented, ...props }} />
    );
};
export default ClearFix;