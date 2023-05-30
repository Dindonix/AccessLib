# useFocus()

useFocus is a custom React hook that enables keyboard navigation on a large range of components.

## Parameters

refArray (Array<RefObject<HTMLElement>>): An array of RefObjects that require an HTMLElement type (mandatory).

initialIndex (number, optional): A number representing the initial index of the refArray, providing an option for positioning the initial focus on mount.

## Returns

An object containing the following properties:

horizontalFocus (function): A function that enables left and right arrow key navigation through the refArray.

verticalFocus (function): A function that enables up and down arrow key navigation through the refArray.

activeFocus: Any type.

setActiveFocus (React.Dispatch<React.SetStateAction<any>>): A state setter function for activeFocus.

## Function

horizontalFocus : A function that enables left and right arrow key navigation through the refArray.

### Parameters

event (KeyboardEvent): The event object passed from the _onKeyDown_ event.

## Function

verticalFocus: A function that enables up and down arrow key navigation through the refArray.

### Parameters

event (KeyboardEvent): The event object passed from the _onKeyDown_ event.

Here an example :

```tsx
const ExampleComponent: React.FC = () => {
  const buttonRefs: RefObject<HTMLButtonElement>[] = [
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
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
```
