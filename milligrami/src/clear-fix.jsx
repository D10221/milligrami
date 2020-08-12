/** @param {*} props */
export const ClearFix = ({ className, ...props }) => {
  const augmented = (className ? `${className} ` : "") + " clearfix";
  return <div {...{ className: augmented, ...props }} />;
};
