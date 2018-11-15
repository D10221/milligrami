import wrapper from "./wrapper";

const variants = {
  wrap: "row-wrap",
  noPadding: "row-no-padding",
  top: "row-top",
  bottom: "row-bottom",
  center: "row-center",
  strech: "row-strech",
  baseline: "row-baseline",
};
const defaultClass = "row";
const defaultElement = "div";
/**
 *
 */
const Row = wrapper<HTMLDivElement, typeof variants>(
  defaultElement,
  defaultClass,
  variants,
);

export default Row;
