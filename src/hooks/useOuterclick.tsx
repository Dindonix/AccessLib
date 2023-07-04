import { useCallback, RefObject, useEffect } from "react";

/**
 *
 * @param {RefObject<HTMLElement>} ref - A ref that require an RefObject<HTMLElement> type.
 * @param {void} callback - A callback function that require a void type.
 *
 */

function useOuterClick(ref: RefObject<HTMLElement>, callback: () => void) {
  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current === event.target) {
        callback();
      }
    },
    [callback, ref]
  );

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);
}

export default useOuterClick;
