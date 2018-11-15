import wrapper from "./wrapper";

const variants = { outline: "button-outline",  clear: "button-clear",};

const Button = wrapper<
  HTMLButtonElement | HTMLAnchorElement | HTMLInputElement, 
  typeof variants
>(
  /* defaultElement: */ "button", 
  /* baseClass: */ "button", 
  variants);


export default Button;
