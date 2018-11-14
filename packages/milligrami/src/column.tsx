import classNames from "classnames";
import * as React from "react";

export type ColumnProps = React.HTMLProps<HTMLDivElement> & {
  columnWidth?: 10 | 20 | 25 | 33 | 40 | 50 | 60 | 66 | 75 | 80 | 90;
  offset?: 10 | 20 | 25 | 33 | 40 | 50 | 60 | 66 | 75 | 80 | 90;
  type?:  keyof React.ReactHTML;
};
/**
 * a <div/> column
 */
export default (({
  className,
  columnWidth,
  offset,
  type,
  children,
  ...props
}) =>
  React.createElement(
    type || "div",
    {
      className: classNames(
        className,
        "column",
        columnWidth && `column-${columnWidth}`,
        offset && `column-offset-${offset}`,
      ),
      ...props,
    },
    children,
  )) as React.StatelessComponent<ColumnProps>;
