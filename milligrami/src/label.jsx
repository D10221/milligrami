import { isUndefinedOrFalse } from "./is.js";
/** @param {*} props */
export const Label = ({ inLine, className, ...props }) => {
  const augmented =
    (className ? `${className} ` : "") +
    (isUndefinedOrFalse(inLine) ? "" : "label-inline");
  return <label {...{ className: augmented, ...props }} />;
};
