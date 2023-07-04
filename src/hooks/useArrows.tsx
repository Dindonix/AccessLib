import { useEffect, useState, RefObject, useCallback } from "react";

const body = document.querySelector("body");

/**
 * useFocus is a custom React hook that enables keyboard navigation on a large range of components.
 *
 * @param {Array<RefObject<HTMLButtonElement>>} refArray - An array of RefObjects that require an HTMLButtonElement type (mandatory).
 * @param {number} [initialIndex] - A number representing the initial index of the refArray, providing an option for positioning the initial focus on mount (optional).
 *
 * @returns {{
 *   horizontalFocus: (event: KeyboardEvent) => void,
 *   verticalFocus: (event: KeyboardEvent) => void,
 *   activeFocus: any,
 *   setActiveFocus: React.Dispatch<React.SetStateAction<any>>
 * }} - Object containing two different functions: horizontalFocus and verticalFocus, along with activeFocus and setActiveFocus state variables.
 */

const useFocus = (refArray: RefObject<HTMLElement>[], initialIndex?: number) => {
  const [activeFocus, setActiveFocus] = useState<number>(0);

  const focusButton = useCallback(
    (index: number) => {
      if (document.activeElement !== body || initialIndex !== undefined) {
        refArray[index]?.current?.focus();
      }
    },
    [initialIndex, refArray]
  );

  useEffect(() => {
    focusButton(activeFocus);
  }, [activeFocus, focusButton]);

  /**
   *
   * @function mouseFocus - A function that put the focus on the current index onClick.
   * @param {MouseEvent} event - The event object passed from the onClick event.
   */

  const mouseFocus = () => {
    setActiveFocus(refArray.findIndex((ref) => ref.current === document.activeElement));
  };

  /**
   *
   * @function horizontalFocus - A function that enables left and right arrow key navigation through the refArray.
   * @param {KeyboardEvent} event - The event object passed from the onKeyDown event.
   */

  const horizontalFocus = (event: KeyboardEvent) => {
    const { key } = event;
    const focus = activeFocus;

    switch (key) {
      case "ArrowRight": {
        setActiveFocus(Math.min(focus + 1, refArray.length - 1));
        break;
      }

      case "ArrowLeft": {
        setActiveFocus(Math.max(focus - 1, 0));
        break;
      }

      case "Tab": {
        if (focus !== refArray.length - 1) {
          event.preventDefault();
          setActiveFocus(Math.min(focus + 1, refArray.length - 1));
        } else {
          setActiveFocus(Math.min(focus + 1, refArray.length - 1));
        }
        break;
      }
    }
  };

  /**
   *
   * @function verticalFocus - A function that enables up and down arrow key navigation through the refArray.
   * @param {KeyboardEvent} event - The event object passed from the onKeyDown event.
   */

  const verticalFocus = (event: KeyboardEvent) => {
    const { key } = event;
    const focus = activeFocus;

    switch (key) {
      case "ArrowDown": {
        setActiveFocus(Math.min(focus + 1, refArray.length - 1));
        break;
      }

      case "ArrowUp": {
        setActiveFocus(Math.max(focus - 1, 0));
        break;
      }

      case "Tab": {
        if (focus !== refArray.length - 1) {
          event.preventDefault();
          setActiveFocus(Math.min(focus + 1, refArray.length - 1));
        } else {
          setActiveFocus(Math.min(focus + 1, refArray.length - 1));
        }
        break;
      }
    }
  };

  return { horizontalFocus, verticalFocus, activeFocus, setActiveFocus, mouseFocus };
};

export default useFocus;
