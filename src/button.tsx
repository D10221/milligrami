/**
 *
 * TODO: HOC , possibly taking ButtonProps|LinkButtonProps|InputButtonProps
 *  return Button|Link|Input?
 *  not returning always the same thing smells
 */

import * as React from "react";
import { isDefined } from "./util/is-defined";

export interface MilligramButtonProps {
    outline?: boolean;
    clear?: boolean;
}

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & MilligramButtonProps;
export type LinkButtonProps = React.HTMLProps<HTMLAnchorElement> & MilligramButtonProps;
export type InputButtonProps = React.HTMLProps<HTMLInputElement> & MilligramButtonProps;

export const Button = (xProps: ButtonProps) => {
    const { outline, clear, ...props } = xProps;
    const className = "button" +
        (isDefined(outline) && outline !== false ? " button-outline" : "") +
        (isDefined(clear) && clear !== false ? " button-clear" : "");
    return (
        <button  {...{
            className,
            ...props
        }} />);
};

export const LinkButton = (xProps: LinkButtonProps) => {
    const { outline, clear, ...props } = xProps;
    const className = "button" +
        (isDefined(outline) && outline !== false ? " button-outline" : "") +
        (isDefined(clear) && clear !== false ? " button-clear" : "");
    return (
        <a  {...{
            className,
            ...props
        }} />);
};

export const InputButton = (xProps: InputButtonProps) => {
    const { outline, clear, ...props } = xProps;
    const className = "button" +
        (isDefined(outline) && outline !== false ? " button-outline" : "") +
        (isDefined(clear) && clear !== false ? " button-clear" : "");
    return (
        <input  {...{
            className,
            ...props
        }} />);
};
