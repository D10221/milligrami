/** @param {*} props */
export const Column = ({ className, columnWidth, offset, ...props }) => {
  const cn =
    (className ? `${className} ` : "") +
    "column" +
    (!columnWidth ? "" : ` column-${columnWidth}`) +
    (!offset ? "" : ` column-offset-${offset}`);
  return <div {...{ className: cn, ...props }} />;
};
/** @param {*} props */
export const ColumnSpan = ({ className, columnWidth, offset, ...props }) => {
  const cn =
    (className ? `${className} ` : "") +
    "column" +
    (!columnWidth ? "" : ` column-${columnWidth}`) +
    (!offset ? "" : ` column-offset-${offset}`);
  return <span {...{ className: cn, ...props }} />;
};
