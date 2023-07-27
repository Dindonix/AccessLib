import type { OptionHTMLAttributes } from "react";

type Props = OptionHTMLAttributes<HTMLOptionElement>;

export const Option = ({ children, ...rest }: Props) => {
  return <option {...rest}>{children}</option>;
};
