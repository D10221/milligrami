/// <reference types="react" />
/**
 *
 * TODO: HOC , possibly taking ButtonProps|LinkButtonProps|InputButtonProps
 *  return Button|Link|Input?
 *  not returning always the same thing smells
 */
import * as React from "react";
export interface MilligramButtonProps {
    outline?: boolean;
    clear?: boolean;
}
export declare type ButtonProps = React.HTMLProps<HTMLButtonElement> & MilligramButtonProps;
export declare type LinkButtonProps = React.HTMLProps<HTMLAnchorElement> & MilligramButtonProps;
export declare type InputButtonProps = React.HTMLProps<HTMLInputElement> & MilligramButtonProps;
export declare const Button: (xProps: ButtonProps) => JSX.Element;
export declare const LinkButton: (xProps: LinkButtonProps) => JSX.Element;
export declare const InputButton: (xProps: InputButtonProps) => JSX.Element;
