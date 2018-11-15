import wrapper from "./wrapper";
const variants = {
  inline: "label-inline",
};
/**
 * label isn't a class in Milligram
 * but including it for consistency
 * will render <label class="label label-inline">
 */
const defaultClass = "label";

const defaultElement = "label";
const label = wrapper<HTMLLabelElement, typeof variants>(
  defaultElement,
  defaultClass,
  variants,
);
/** */
export default label;
