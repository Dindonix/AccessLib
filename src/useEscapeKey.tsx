import { RefObject, useCallback } from "react";

/**
 *
 * @param {RefObject<HTMLElement>} ref - A ref that require an RefObject<HTMLElement> type.
 * @param {() => void} [callback] - Optional callback function.
 */
const useEscapeKey = (callbackOrRef: (() => void) | RefObject<HTMLElement>) => {
  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (typeof callbackOrRef === "function") {
          callbackOrRef();
        } else if (callbackOrRef !== null) {
          callbackOrRef.current?.focus();
        }
      }
    },
    [callbackOrRef]
  );

  window.addEventListener("keydown", handleEscape);
};

export default useEscapeKey;
