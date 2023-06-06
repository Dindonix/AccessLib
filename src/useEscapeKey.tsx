import { RefObject, useCallback } from "react";

/**
 *
 * @param {RefObject<HTMLElement>} ref - A ref that require an RefObject<HTMLElement> type.
 *
 */

const useEscapeKey = (ref: RefObject<HTMLElement>) => {
  const handleEscape = useCallback((ref: RefObject<HTMLElement>) => {
    ref.current?.focus();
  }, []);

  const onEscape = (ref: RefObject<HTMLElement>): void => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        handleEscape(ref);
      }
    });
  };

  onEscape(ref);
};

export default useEscapeKey;
