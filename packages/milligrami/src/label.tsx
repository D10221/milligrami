import classNames from "classnames";
import React from "react";
import arrify from "./arrify";
export type Variant = "inline";
/** */
export type LabelProps = React.HTMLProps<HTMLLabelElement> & {
  variant?: Variant | Variant[];
  className?: string;
};
/** */
const Label: React.StatelessComponent<LabelProps> = ({
  variant,
  className,
  children,
  ...props
}) => {
  const variants = arrify(variant);
  return React.createElement(
    "label",
    {
      className: classNames(
        className,
        variants.indexOf("inline") !== -1 && "label-inline",
      ),
      ...props,
    },
    children,
  );
};
export default Label;
