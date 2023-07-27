import {
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ChangeEventHandler,
  type RefObject,
  type SelectHTMLAttributes,
} from "react";
import { SetStateContext } from "./Menu";

export type OptionButtonRef = RefObject<HTMLSelectElement>;

export type SelectState = {
  ref: OptionButtonRef;
  option: Options;
};

type Options = "fontSize" | "line" | "image" | "fontChange";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  labelStyle: string;
  option: Options;
};

type State = {
  value: string;
};

export const Select = ({ children, label, option, labelStyle, ...rest }: Props) => {
  const ref = useRef<HTMLSelectElement>(null);

  const labelId = useId();

  const [state, setState] = useState<State>({
    value: "",
  });

  const setMenuState = useContext(SetStateContext);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setState((prevState) => ({ ...prevState, value: event.target.value }));
  };

  useEffect(() => {
    setMenuState((prevState) => ({
      ...prevState,
      selectButton: [...prevState.selectButton, { ref, option }],
    }));
  }, [setMenuState, option]);

  return (
    <>
      <div>
        <label className={labelStyle} htmlFor={labelId}>
          {label}
        </label>
        <select data-option={option} id={labelId} onChange={handleChange} ref={ref} value={state.value} {...rest}>
          {children}
        </select>
      </div>
    </>
  );
};
