import * as React from "react";
export type ContainerProps = React.HTMLProps<HTMLDivElement> & {

};

export const Container = (xProps: ContainerProps) => {
    const { className, ...props } = xProps;
    const augmented = (className ? `${className} ` : "") + "container";
    return (
        <div {...{ className: augmented, ...props }} />
    );
};
export const ContainerSection = (xProps: ContainerProps) => {
    const { className, ...props } = xProps;
    const augmented = (className ? `${className} ` : "") + "container";
    return (
        <section {...{ className: augmented, ...props }} />
    );
};
