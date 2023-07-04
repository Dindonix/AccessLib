# <span style="font-size: 60px;">AccessLib</span>

_AccessLib is a React library that provides easy-to-use hooks and unstyled accessible components for accessibility handling._

# **Components**

## **Accordion Component**

The Accordion component is a React component that provides a simple and customizable way to create an accordion-style UI, where users can click on a question to reveal its corresponding answer.

## Installation

To use the Accordion component in your React project, you need to have `react` and `nanoid` installed as dependencies. If you haven't already installed them, you can do so with npm or yarn:

```bash
npm install react nanoid
```

## Usage

1. Import the `Accordion` component into your React component:

```jsx
import Accordion from "./path/to/Accordion";
```

2. Use the Accordion component in your JSX, providing the necessary props:

```jsx
<Accordion
  questions={[
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
  ]}
  styles={{
    container: "accordion-container",
    childContainer: "accordion-child-container",
    details: "accordion-details-tag",
    question: "accordion-question",
    answer: "accordion-answer",
  }}
/>
```

# **Hooks**

## **useArrows()**

useArrows is a custom React hook that enables keyboard navigation on a large range of components.

### Parameters

1. refArray (Array<RefObject<HTMLElement>>): An array of RefObjects that require an HTMLElement type (mandatory).

2. initialIndex (number, optional): A number representing the initial index of the refArray, providing an option for positioning the initial focus on mount.

### Returns

An object containing the following properties:

1. horizontalFocus (function): A function that enables left and right arrow key navigation through the refArray.

2. verticalFocus (function): A function that enables up and down arrow key navigation through the refArray.

3. mouseFocus (function): A function that put the focus on the current index onClick.

4. activeFocus: Any type.

5. setActiveFocus : A state setter function for activeFocus.

### Function

horizontalFocus : A function that enables left and right arrow key navigation through the refArray.

#### Parameter

event (KeyboardEvent): The event object passed from the _onKeyDown_ event.

### Function

verticalFocus: A function that enables up and down arrow key navigation through the refArray.

#### Parameter

event (KeyboardEvent): The event object passed from the _onKeyDown_ event.

### Function

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

#### Parameter

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

#### Parameter

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
