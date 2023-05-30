useFocus
useFocus is a custom React hook that enables keyboard navigation on a large range of components.

Parameters
refArray (Array<RefObject<HTMLButtonElement>>): An array of RefObjects that require an HTMLButtonElement type (mandatory).
initialIndex (number, optional): A number representing the initial index of the refArray, providing an option for positioning the initial focus on mount.
Returns
An object containing the following properties:

horizontalFocus (function): A function that enables left and right arrow key navigation through the refArray.
verticalFocus (function): A function that enables up and down arrow key navigation through the refArray.
activeFocus: Any type.
setActiveFocus (React.Dispatch<React.SetStateAction<any>>): A state setter function for activeFocus.
Function Details
horizontalFocus
A function that enables left and right arrow key navigation through the refArray.

Parameters
event (KeyboardEvent): The event object passed from the onKeyDown event.
verticalFocus
A function that enables up and down arrow key navigation through the refArray.

Parameters
event (KeyboardEvent): The event object passed from the onKeyDown event.
  
Example
  
jsx
<>
import React, { useRef } from 'react';
import useFocus from 'path/to/useFocus';

const ExampleComponent: React.FC = () => {
  const buttonRefs = [
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null)
  ];

  const { horizontalFocus } = useFocus(buttonRefs);

  return (
    <>
      <button
        ref={buttonRefs[0]}
        type="button"
        onKeyDown={(event) => {
          horizontalFocus(event);
        }}
      >
        Button 1
      </button>

      <button
        ref={buttonRefs[1]}
        type="button"
        onKeyDown={(event) => {
          horizontalFocus(event);
        }}
      >
        Button 2
      </button>
    </>
  );
};
   </>
This example demonstrates how to use the useFocus hook to enable keyboard navigation on buttons within a component. The buttonRefs array holds the references to the buttons. The horizontalFocus function is obtained from the hook and assigned to the onKeyDown event of each button, enabling left and right arrow key navigation.
