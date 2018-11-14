import classNames from "classnames";
import arrify from "./arrify";

const floatDirections = {
  left: "float-left",
  right: "float-right",
};

type Float = "left" | "right";

type Utils = (o: { float?: Float }, classes?: string | (string[])) => string;

const utils: Utils = ({ float }, classes): string =>
  classNames(...arrify(classes), float && floatDirections[float]);

export default utils;
