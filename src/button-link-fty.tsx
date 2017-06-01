import * as React from "react";
export const ButtonLinkFty = (...types: string[]) => (props: React.HTMLProps<HTMLAnchorElement>) => {
    return (<a className={`button ${types.map(x => `button-${x}`).join(" ")}`} {...props} />);
};