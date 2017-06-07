import * as React from "react";

/**
 * Clear any float
 */
export const ClearFix = (props: React.HTMLProps<HTMLDivElement>) => (
    <div className="clearfix" {...props } />
);

