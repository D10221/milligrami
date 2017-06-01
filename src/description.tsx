import * as React from "react";

/**
 * I made up this one: not an original Milligram element
 */
export const Description = (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className="description" {...props} />
);