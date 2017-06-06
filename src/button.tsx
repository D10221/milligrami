import * as React from "react";

export const Button = (props: React.HTMLProps<HTMLButtonElement>) => {
    return (
        <button className="button" {...{
            className: props.className,
            ...props
        }} />);
};

export const ButtonOutline = (props: React.HTMLProps<HTMLButtonElement>) => {
    return (
        <button className="button button-outline" {...props} />);
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

export const ButtonClear = (props: React.HTMLProps<HTMLButtonElement>) => {
    return (
        <button className="button button-clear" {...props} />
    );
};      