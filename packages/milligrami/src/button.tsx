import React from "react";
import classNames from "classnames";
import arrify from "./arrify";

export type Variant = "outline" | "clear";

export type ButtonProps = React.HTMLProps<
  HTMLButtonElement & HTMLAnchorElement & HTMLInputElement
> & {
  variant?: Variant | Variant[];
  element?: keyof React.ReactHTML;
  className?: string;
};

const Button: React.StatelessComponent<ButtonProps> = ({
  variant,
  className,
  element,
  children,
  ...props
}) => {
  const variants = arrify(variant);
  return React.createElement(
    element || "button",
    {
      className: classNames(
        className,
        "button",
        variants.indexOf("clear") !== -1 && "button-clear",
        variants.indexOf("outline") !== -1 && "button-outline",
      ),
      ...props,
    },
    children,
  );
};

export default Button;
