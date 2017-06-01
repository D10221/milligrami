import * as React from "react";
export const ContainerSection = (props: React.HTMLProps<HTMLElement>) => {
    return (
        <section className="container" {...props} />
    );
};