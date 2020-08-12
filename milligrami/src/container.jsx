/** @param {*} props */
export const Container = ({ className, ...props }) => {  
  const augmented = (className ? `${className} ` : "") + "container";
  return <div {...{ className: augmented, ...props }} />;
};
/** @param {*} props */
export const ContainerSection = ({ className, ...props }) => {
  const augmented = (className ? `${className} ` : "") + "container";
  return <section {...{ className: augmented, ...props }} />;
};
