import * as React from "react";
export const ButtonInputOutline = (props: React.HTMLProps<HTMLInputElement>) => {
    return (
        <input className="button button-outline" {...props} />
    );
};