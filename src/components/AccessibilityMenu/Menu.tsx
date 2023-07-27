import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type Dispatch,
  type HTMLAttributes,
  type SetStateAction,
} from "react";

import { Option } from "./Option";
import { Select, type SelectState } from "./Select";
import { SelectList } from "./SelectList";

type State = {
  selectButton: SelectState[];
};

type Props = HTMLAttributes<HTMLDivElement>;

export const SetStateContext = createContext<Dispatch<SetStateAction<State>>>(() => {
  throw new Error("Cannot access SetStateContext outside of the Menu component");
});

export const Menu = ({ children, ...rest }: Props) => {
  const [state, setState] = useState<State>({
    selectButton: [],
  });

  const changeLineHeight = useCallback((selectedValue: string) => {
    const lineHeightValues: { [key: string]: string } = {
      Default: "1.5",
      Large: "2",
      ExtraLarge: "2.5",
    };

    const items = document.querySelectorAll<HTMLElement>("p, li");

    items.forEach((item) => {
      item.style.lineHeight = lineHeightValues[selectedValue];
    });
  }, []);

  const handleChangeFontSize = useCallback((event: Event) => {
    const select = event.target as HTMLSelectElement;
    if (select.value === "Default") {
      document.documentElement.style.fontSize = "16px";
    } else if (select.value === "Large") {
      document.documentElement.style.fontSize = "20px";
    } else if (select.value === "ExtraLarge") {
      document.documentElement.style.fontSize = "24px";
    }
  }, []);

  const handleChangeFont = useCallback((event: Event) => {
    const select = event.target as HTMLSelectElement;
    document.querySelectorAll<HTMLElement>("*").forEach((item) => {
      if (select.value !== "") {
        item.style.fontFamily = select.value;
      }
    });
  }, []);

  const handleChangeLine = useCallback(
    (event: Event) => {
      const select = event.target as HTMLSelectElement;

      changeLineHeight(select.value);
    },
    [changeLineHeight]
  );

  const handleChangeImage = useCallback((event: Event) => {
    const select = event.target as HTMLSelectElement;
    document.querySelectorAll("img").forEach((img) => {
      img.style.display = select.value === "visible" ? "initial" : "none";
    });
  }, []);

  const handleMutation = useCallback(
    (records: MutationRecord[]) => {
      for (const record of records) {
        if (record.addedNodes.length > 0) {
          const selectElement = document.querySelector<HTMLSelectElement>("select[data-option='line']");
          if (selectElement) {
            const selectedValue = selectElement.value;
            changeLineHeight(selectedValue);
          }
        }
      }
    },
    [changeLineHeight]
  );

  useEffect(() => {
    const observer = new MutationObserver((records: MutationRecord[]) => {
      handleMutation(records);
    });

    const targetNode = document.querySelector("body");
    if (targetNode) {
      observer.observe(targetNode, { subtree: true, childList: true });
    }

    return () => {
      observer.disconnect();
    };
  }, [handleMutation]);

  useEffect(() => {
    for (const selectState of state.selectButton) {
      const select = selectState.ref.current;

      if (select !== null) {
        if (selectState.option === "fontSize") {
          select.addEventListener("change", handleChangeFontSize);
        } else if (selectState.option === "fontChange") {
          select.addEventListener("change", handleChangeFont);
        } else if (selectState.option === "line") {
          select.addEventListener("change", handleChangeLine);
        } else if (selectState.option === "image") {
          select.addEventListener("change", handleChangeImage);
        }
      }
    }

    return () => {
      for (const selectState of state.selectButton) {
        if (selectState.option === "fontSize") {
          selectState.ref.current?.removeEventListener("change", handleChangeFontSize);
        } else if (selectState.option === "fontChange") {
          selectState.ref.current?.removeEventListener("change", handleChangeFont);
        } else if (selectState.option === "line") {
          selectState.ref.current?.removeEventListener("change", handleChangeLine);
        } else if (selectState.option === "image") {
          selectState.ref.current?.removeEventListener("change", handleChangeImage);
        }
      }
    };
  }, [handleChangeFont, handleChangeFontSize, handleChangeImage, handleChangeLine, state.selectButton]);

  return (
    <div {...rest}>
      <SetStateContext.Provider value={setState}>{children}</SetStateContext.Provider>
    </div>
  );
};

Menu.Option = Option;
Menu.Select = Select;
Menu.SelectList = SelectList;
