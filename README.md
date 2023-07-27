# <span style="font-size: 60px;">AccessLib</span>

_AccessLib is a React library that provides easy-to-use hooks and unstyled accessible components for accessibility handling._

# **Components**

## **Accessibility menu Component**

The AccessibilityMenu component is a React component that provides a simple and customizable way to implement a menu that will allow your users to personalize the whole website as they want. Multiple options are available for reusability. All of this is possible thanks to the compound component pattern.

## Installation

To use the AccessibilityMenu component in your React project, you need to have `react` installed as dependencies.

## Usage

1. Import the `AccessibilityMenu` component into your React component:

```jsx
import AccessibilityMenu from "./path/to/AccessibilityMenu";
```

2. Use the AccessibilityMenu component in your JSX, providing the necessary props:

### Option: The option props will allow you to choose between 4 possibilities and need to be put on the <Menu.Select />:

- fontSize (to change the font size between 3 values)
- line (to change the line height between 3 values)
- image (to hide the images)
- fontChange (to choose the font of your choice)

### Values: The value props will allow you to choose between 3 possibilities and need to be put on the <Menu.Option>. It is only available with the "fontSize" and "line" options like this.

- Default
- Large
- ExtraLarge

For the "image" option you can choose between

- visible
- hidden

For the "fontChange" option, just fill the values with any font family available to you.

### Label: The label props let you write down the name of the select button of your choice accordingly with the option you chose.

```jsx
<Menu aria-label="Accessibility menu" className="MenuClass">
  <Menu.SelectList className="SelectListClass ">
    <Menu.Select labelStyle="labeClass" label="Change the font size" option="fontSize" className="SelectClass">
      <Menu.Option value="Default">Default</Menu.Option>
      <Menu.Option value="Large">Large</Menu.Option>
      <Menu.Option value="ExtraLarge">Extra Large</Menu.Option>
    </Menu.Select>
    <Menu.Select labelStyle="labeClass" label="Change the line spacing" option="line" className="SelectListClass">
      <Menu.Option value="Default">Default</Menu.Option>
      <Menu.Option value="Large">Large</Menu.Option>
      <Menu.Option value="ExtraLarge">Extra Large</Menu.Option>
    </Menu.Select>
    <Menu.Select labelStyle="labeClass" label="Display images" option="image" className="SelectListClass">
      <Menu.Option value="visible">visible</Menu.Option>
      <Menu.Option value="hidden">hidden</Menu.Option>
    </Menu.Select>
    <Menu.Select labelStyle="labeClass" label="Change the font" option="fontChange" className="SelectListClass">
      <Menu.Option value="Basis, arial">Default</Menu.Option>
      <Menu.Option value="Georgia, serif">Georgia</Menu.Option>
      <Menu.Option value="fantasy">Fantasy</Menu.Option>
      <Menu.Option value="cursive">Cursive</Menu.Option>
    </Menu.Select>
  </Menu.SelectList>
</Menu>
```

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

## **Tabs Component**

A custom Tabs component for React that allows you to create a tabbed interface. Each tab consists of a label and corresponding content.

## Installation

To use the Tabs component in your React project, you need to have `react` and `nanoid` installed as dependencies. If you haven't already installed them, you can do so with npm or yarn:

```bash
npm install react nanoid
```

## Usage

1. Import the `Tabs` component into your React component:

```jsx
import Tabs from "./path/to/Tabs";
```

2. Import the `useTabAttributes` hook into your React component:

```jsx
import useTabAttributes from "../hooks/useTabAttributes";
```

3. Use the Tabs component in your JSX, providing the necessary props:

```jsx
<Tabs
  tabs={[
    { label: "Tab 1", content: "This is the content of Tab 1" },
    { label: "Tab 2", content: "This is the content of Tab 2" },
    { label: "Tab 3", content: "This is the content of Tab 3" },
  ]}
  styles={{
    container: "tabs-container",
    childContainer: "tabs-childContainer",
    tabs: "tabs-tabs",
    activeTabs: "tabs-activeTabs",
    tabpanelContainer: "tabs-tabpanelContainer",
    tabpanels: "tabs-tabpanels",
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
