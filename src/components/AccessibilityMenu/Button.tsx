import { useContext, useRef, RefObject, type SelectHTMLAttributes, useEffect, useId } from "react";
import { SetStateContext } from "./Menu";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  option: Options;
};

type Options = "fontSize" | "line" | "image" | "fontChange";

export type OptionButtonRef = RefObject<HTMLSelectElement>;

export type SelectState = {
  ref: OptionButtonRef;
  option: Options;
};

export const Button = ({ children, label, option, ...rest }: Props) => {
  const ref = useRef<HTMLSelectElement>(null);

  const labelId = useId();

  const setState = useContext(SetStateContext);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      selectButton: [...prevState.selectButton, { ref, option }],
    }));
  }, [setState, option]);

  return (
    <>
      <div>
        <label htmlFor={labelId}>{label}</label>
        <select id={labelId} data-option={option} ref={ref} {...rest}>
          {children}
        </select>
      </div>
    </>
  );
};
