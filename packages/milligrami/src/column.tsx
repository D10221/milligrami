import classNames from "classnames";
import React from "react";

export type ColumnProps = React.HTMLProps<HTMLDivElement> & {
  columnWidth?: 10 | 20 | 25 | 33 | 40 | 50 | 60 | 66 | 75 | 80 | 90;
  offset?: 10 | 20 | 25 | 33 | 40 | 50 | 60 | 66 | 75 | 80 | 90;
  element?: keyof React.ReactHTML;
};
/**
 *
 * @param param0
 */
const column: React.StatelessComponent<ColumnProps> = ({
  className,
  columnWidth,
  offset,
  element,
  children,
  ...props
}) =>
  React.createElement(
    element || "div",
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
  );
column.displayName = `Column`;
/**
 * a <div/> column
 */
export default column;
