import warn from "./warn.js";
/** @param {*} props */
export const Float = ({ left, right, direction, className, ...props }) => {
  const cname =
    (className ? `${className} ` : "") +
    (left ? "float-left" : "") +
    (right ? "float-right" : "") +
    (direction === "left" ? "float-left" : "") +
    (direction === "right" ? "float-right" : "");

  if ((left && right) || ((left || right) && direction)) {
    warn(`what are you trying to do ? ${cname}`);
  }

  return <div {...{ className: cname, ...props }} />;
};
