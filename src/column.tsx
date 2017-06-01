import * as React from "react";

/**
 * column column-50 column-offset-25 ?
 */
export const Column = (props: React.HTMLProps<HTMLDivElement>) => (
    <div className="column" {...props} />
);