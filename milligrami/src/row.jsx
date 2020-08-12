import { isUndefinedOrFalse } from "./is.js";
/** @param {*} props */
export const Row = ({
  rowWrap,
  rowNoPadding,
  rowTop,
  rowBottom,
  rowCenter,
  rowStretch,
  rowBaseline,
  className,
  ...props
}) => {
  const cn =
    (className ? `${className} ` : "") +
    "row" +
    (isUndefinedOrFalse(rowWrap) ? "" : " row-wrap") +
    (isUndefinedOrFalse(rowNoPadding) ? "" : " row-no-padding") +
    (isUndefinedOrFalse(rowTop) ? "" : " row-top") +
    (isUndefinedOrFalse(rowBottom) ? "" : " row-bottom") +
    (isUndefinedOrFalse(rowCenter) ? "" : " row-center") +
    (isUndefinedOrFalse(rowStretch) ? "" : " row-stretch") +
    (isUndefinedOrFalse(rowBaseline) ? "" : " row-baseline");
  return <div {...{ className: cn, ...props }} />;
};
