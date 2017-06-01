import * as React from "react";
// import { observer } from "mobx-react";

export const Nav = (props: React.HTMLProps<HTMLDivElement>) => {
    return (
        <nav className="navigation" {...props} />
    );
};

export const NavTitle = (props: React.HTMLProps<HTMLAnchorElement>) => {
    return (
        <a className="navigation-title" {...props} />
    );
};

export const NavigationList = (props: React.HTMLProps<HTMLUListElement>) => {
    return (
        <ul className="navigation-list float-right" {...props} />
    );
};

export const NavItem = (props: React.HTMLProps<HTMLLIElement>) => {
    return (<li className="navigation-item" {...props} />);
};

export const NavLink = (props: React.HTMLProps<HTMLAnchorElement>) => {

    return (<a className="navigation-link" data-popover {...props} />);
};
