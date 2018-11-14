import classNames from "classnames";
import React from "react";

export type ContainerProps = React.HTMLProps<HTMLDivElement> & {
  element?: "div" | "span" | "section";
};

export default (({ className, element, children, ...props }) => {
  return React.createElement(
    element || "div",
    { className: classNames(className, "container"), ...props },
    children,
  );
}) as React.StatelessComponent<ContainerProps>;
