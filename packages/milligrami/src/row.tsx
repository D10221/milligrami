import classNames from "classnames";
import React from "react";
import arrify from "./arrify";

export type Variant = keyof typeof variants;

export type RowProps = React.HTMLProps<HTMLElement> & {
  variant?: Variant | Variant[];
  element?: "div";
};

const variants = {
  wrap: "row-wrap",
  noPadding: "row-no-padding",
  top: "row-top",
  bottom: "row-bottom",
  center: "row-center",
  strech: "row-strech",
  baseline: "row-baseline",
};
/**
 *
 */
const Row: React.StatelessComponent<RowProps> = ({
  children,
  className,
  element,
  variant,
  ...props
}) => {
  return React.createElement(
    element || "div",
    {
      ...props,
      className: classNames(
        className,
        "row",
        ...arrify(variant).map(key => variants[key]),
      ),
    },
    children,
  );
};

export default Row;
