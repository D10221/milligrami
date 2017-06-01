import * as React from "react";
export const Button = (props: React.HTMLProps<HTMLButtonElement>) => {
    return (
        <button className="button" {...props} />);
};

