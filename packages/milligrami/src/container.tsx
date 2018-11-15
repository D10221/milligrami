import classNames from "classnames";
import React from "react";

export type ContainerProps = React.HTMLProps<HTMLDivElement|HTMLSpanElement> & {
  element?: keyof React.ReactHTML;
};
const container: React.StatelessComponent<ContainerProps> = ({
  className,
  element,
  children,
  ...props
}) => {
  return React.createElement(
    element || "div",
    { className: classNames(className, "container"), ...props },
    children,
  );
};
export default container;
