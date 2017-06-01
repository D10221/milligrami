import * as React from "react";

export const Submit = (props: React.HTMLProps<HTMLInputElement>) => (
    <input className="button-primary" type="submit" {...props} />
);
