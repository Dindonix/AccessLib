# AccessLib

AccessLib is a React library that provides easy-to-use hooks for accessibility handling.

## <u>**useFocus()**</u>

useFocus is a custom React hook that enables keyboard navigation on a large range of components.

### <u>Parameters</u>

1. refArray (Array<RefObject<HTMLElement>>): An array of RefObjects that require an HTMLElement type (mandatory).

2. initialIndex (number, optional): A number representing the initial index of the refArray, providing an option for positioning the initial focus on mount.

### <u>Returns</u>

An object containing the following properties:

1. horizontalFocus (function): A function that enables left and right arrow key navigation through the refArray.

2. verticalFocus (function): A function that enables up and down arrow key navigation through the refArray.

3. activeFocus: Any type.

4. setActiveFocus : A state setter function for activeFocus.

### <u>Function</u>

horizontalFocus : A function that enables left and right arrow key navigation through the refArray.

#### <u>Parameter</u>

event (KeyboardEvent): The event object passed from the _onKeyDown_ event.

### <u>Function</u>

verticalFocus: A function that enables up and down arrow key navigation through the refArray.

#### <u>Parameter</u>

event (KeyboardEvent): The event object passed from the _onKeyDown_ event.

_Here an example_ :

```tsx
const ExampleComponent: React.FC = () => {
  const buttonRefs: RefObject<HTMLButtonElement>[] = [useRef<HTMLButtonElement>(null), useRef<HTMLButtonElement>(null)];

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

## **useEscapeKey()**

useEscapeKey is a custom React hook that let you focus any HTMLElement by pressing the Escape keyframe.

#### <u>Parameter</u>

ref - A ref that require an RefObject<HTMLElement> type.

_Here an example_ :

```tsx
const ExampleComponent(): JSX.Element {
  const escapeRef = useRef<HTMLElement>(null);

  useEscapeKey(escapeRef);

  return (
    <>
      <section>
        <header>
          <ul>
                 <li ref={escapeRef}>
                 </li>
          </ul>
        </header>
        <main>
        </>
    );
};

```
