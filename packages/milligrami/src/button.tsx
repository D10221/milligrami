import React from "react";
import classNames from "classnames";
import arrify from "./arrify";

export type Variant = "outline" | "clear";

export interface MilligramButtonProps {
  variant?: Variant | Variant[];
  type?:  keyof React.ReactHTML;
  className?: string;
}

export type ButtonProps = React.HTMLProps<
  HTMLButtonElement | HTMLAnchorElement | HTMLInputElement
> &
  MilligramButtonProps;

const Button: React.StatelessComponent<ButtonProps> = ({
  variant,
  className,
  type,
  children,
  ...props
}) => {
  const variants = arrify(variant);
  return React.createElement(
    type || "button",
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
