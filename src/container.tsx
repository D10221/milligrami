import * as React from "react";
export type ContainerProps = React.HTMLProps<HTMLDivElement> & {

};

export const Container = (xProps: ContainerProps) => {
    const { className, ...props } = xProps;
    const augmented = "container " + className;
    return (
        <div {...{augmented, ...props }} />
    );
};
export const ContainerSection = (xProps: ContainerProps) => {
    const { className, ...props } = xProps;
    const augmented = "container " + className;
    return (
        <section {...{augmented, ...props }} />
    );
};
