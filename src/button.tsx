import * as React from "react";
import { isDefined } from "./util/is-defined";

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
    outline?: boolean,
    clear?: boolean
};  

export const Button = (xProps: ButtonProps) => {
    const { outline, clear , ...props} = xProps;
    const className = "button" +
        ( isDefined(outline) && outline !== false? " button-outline" : "" )+ 
        ( isDefined(clear) && clear !== false? " button-clear"   : "");
    return (
        <button  {...{
            className,
            ...props
        }} />);
};

export const ButtonLink = (props: React.HTMLProps<HTMLAnchorElement>) => (
    <a className="button" {...props} />
);

export const ButtonLinkOutline = (props: React.HTMLProps<HTMLAnchorElement>) => (
    <a className="button button-outline" {...props} />
);

export const ButtonLinkClear = (props: React.HTMLProps<HTMLAnchorElement>) => (
    <a button-clear className="button button-clear" {...props} />
);

export const ButtonInputPrimary = (props: React.HTMLProps<HTMLInputElement>) => (
    <input className="button-primary" {...props} />
);

export const ButtonInputOutline = (props: React.HTMLProps<HTMLInputElement>) => {
    return (
        <input className="button button-outline" {...props} />
    );
};

export const ButtonInputClear = (props: React.HTMLProps<HTMLInputElement>) => {
    return (
        <input className="button button-clear" {...props} />
    );
};