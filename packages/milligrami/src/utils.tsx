import classNames from "classnames";
import arrify from "./arrify";

const floatDirections = {
  left: "float-left",
  right: "float-right",
};

type Float = "left" | "right";

type Utils = (o: { float?: Float ,clearfix?: boolean }, classes?: string | (string[])) => string;

const utils: Utils = ({ float, clearfix }, classes): string =>
  classNames(
    ...arrify(classes), 
    float && floatDirections[float],
    Boolean(clearfix) && "clearfix"
  );

export default utils;
