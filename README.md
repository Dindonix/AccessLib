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
  

  
