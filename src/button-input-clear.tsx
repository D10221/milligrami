import * as React from "react";
export const ButtonInputClear = (props: React.HTMLProps<HTMLInputElement>) => {
    return (
        <input className="button button-clear" {...props} />
    );
};