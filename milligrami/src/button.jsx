import { isDefined } from "./is.js";
/** @param {*} props */
export const Button = ({ outline, clear, className, ...props }) => {
  const cn =
    (className ? `${className} ` : "") +
    "button" +
    (isDefined(outline) && outline !== false ? " button-outline" : "") +
    (isDefined(clear) && clear !== false ? " button-clear" : "");
  return (
    <button
      {...{
        className: cn,
        ...props,
      }}
    />
  );
};
/** @param {*} props */
export const LinkButton = ({ outline, clear, className, ...props }) => {
  const cn =
    (className ? `${className} ` : "") +
    "button" +
    (isDefined(outline) && outline !== false ? " button-outline" : "") +
    (isDefined(clear) && clear !== false ? " button-clear" : "");
  return (
    <a
      {...{
        className: cn,
        ...props,
      }}
    />
  );
};
/** @param {*} props */
export const InputButton = ({ outline, clear, className, ...props }) => {
  const cn =
    (className ? `${className} ` : "") +
    "button" +
    (isDefined(outline) && outline !== false ? " button-outline" : "") +
    (isDefined(clear) && clear !== false ? " button-clear" : "");
  return (
    <input
      {...{
        className: cn,
        ...props,
      }}
    />
  );
};
