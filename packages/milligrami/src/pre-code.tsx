import React from "react";

/**
 *
 */
const PreCode: React.StatelessComponent<{
  pre?: React.HTMLProps<HTMLPreElement>;
  code?: React.HTMLProps<HTMLHtmlElement>;
}> = ({ children, ...props }) => (
  <pre {...props.pre}>
    <code {...props.code}>{children}</code>
  </pre>
);

PreCode.defaultProps = {
  pre: {},
  code: {},
};

export default PreCode;
