import * as React from "react";
import { isDefined } from "./util/is-defined";

export interface MilligramButtonProps {
    outline?: boolean;
    clear?: boolean;
}

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & MilligramButtonProps;
export type ButtonLinkProps = React.HTMLProps<HTMLAnchorElement> & MilligramButtonProps;
export type ButtonInputProps = React.HTMLProps<HTMLInputElement> & MilligramButtonProps;

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

export const ButtonLink = (xProps: ButtonLinkProps) => {
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

export const ButtonInput = (xProps: ButtonInputProps) => {
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
