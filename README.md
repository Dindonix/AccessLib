# AccessLib

AccessLib is a React library that provides easy-to-use hooks for accessibility handling.

## <u>**useArrows()**</u>

useArrows is a custom React hook that enables keyboard navigation on a large range of components.

### <u>Parameters</u>

1. refArray (Array<RefObject<HTMLElement>>): An array of RefObjects that require an HTMLElement type (mandatory).

2. initialIndex (number, optional): A number representing the initial index of the refArray, providing an option for positioning the initial focus on mount.

### <u>Returns</u>

An object containing the following properties:

1. horizontalFocus (function): A function that enables left and right arrow key navigation through the refArray.

2. verticalFocus (function): A function that enables up and down arrow key navigation through the refArray.

3. mouseFocus (function): A function that put the focus on the current index onClick.

4. activeFocus: Any type.

5. setActiveFocus : A state setter function for activeFocus.

### <u>Function</u>

horizontalFocus : A function that enables left and right arrow key navigation through the refArray.

#### <u>Parameter</u>

event (KeyboardEvent): The event object passed from the _onKeyDown_ event.

### <u>Function</u>

verticalFocus: A function that enables up and down arrow key navigation through the refArray.

#### <u>Parameter</u>

event (KeyboardEvent): The event object passed from the _onKeyDown_ event.

### <u>Function</u>

mouseFocus: A function that put the focus on the clicked element so we don't loose track of the current index inside the refArray.

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
        onClick={() => {
          mouseFocus();
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
        onClick={() => {
          mouseFocus();
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

ref - An optional ref that require a RefObject<HTMLElement> type.

callback - Optional callback function.

_Here an example_ :

```tsx
const ExampleComponent(): JSX.Element {
  const escapeRef = useRef<HTMLElement>(null);
  const [modal, setModal] = useState(false);


  const openModal = () => {
    setModal(true);
  };

  useEscapeKey(escapeRef || closeModal);

  const closeModal = () => {
    setModal(false);
  };

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

## **useOuterClick()**

useOuterClick is a custum hook that allow to close an HTMLElement by clicking outside of it.

Note that the ref is placed on a children element in order to get a parent element to click on (to close the children).

#### <u>Parameter</u>

ref - A ref that require a RefObject<HTMLElement> type.

callback - A callback function that close the the element by inversing the boolean value of a useState.

_Here an example_ :

```tsx
const exampleModal = () => {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const clickRef = useRef<HTMLElement>();

  const openErrorModal = () => {
    setIsErrorModalOpen(true);
  };

  const closeErrorModal = () => {
    setIsErrorModalOpen(false);
  };

  useOuterClick(clickRef, closeErrorModal);

  return (
    <div>
      <button onClick={openErrorModal}>buttonText</button>

      {isErrorModalOpen && (
        <dialog ref={clickRef}>
          <div>
            <p>modalContent</p>
            <button onClick={closeErrorModal}>close</button>
          </div>
        </dialog>
      )}
    </div>
  );
};
```
