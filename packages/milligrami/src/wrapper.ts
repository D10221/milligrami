import React from "react";
import classNames from "classnames";
import arrify from "./arrify";

export default function createWrapper<E extends HTMLElement, V = {}>(
  defaultElement: keyof React.ReactHTML,
  baseClass: string,
  variants: V,
) {

  type VariantKey = keyof typeof variants;

  type ElementWrapper<
    ElementType extends HTMLElement = HTMLElement
  > = React.StatelessComponent<
    React.HTMLProps<ElementType> & {
      variant?: VariantKey | VariantKey[];
      element?: keyof React.ReactHTML;
    }
  >;

  const wrapper: ElementWrapper<E> = ({
    variant,
    className,
    element,
    children,
    ...props
  }) => {
    return React.createElement(
      element || defaultElement,
      {
        className: classNames(
          className,
          baseClass,
          ...arrify(variant).map(key => variants && variants[key]),
        ),
        ...props,
      },
      children,
    );
  };
  wrapper.displayName = `Wrapper(${defaultElement})`;
  return wrapper;
}
