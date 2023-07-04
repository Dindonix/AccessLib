import { useState } from "react";
import { nanoid } from "nanoid";

type Question = {
  id: number;
  question: string;
  answer: string;
  isExpanded: boolean;
  answerId: string;
};

type Styles = {
  container?: string;
  childContainer?: string;
  details?: string;
  question?: string;
  answer?: string;
};

/**
 * Accordion component.
 *
 * @component
 * @example
 
 * // Example usage of Accordion component
 * <Accordion
 *   questions={[
 *     { question: 'Question 1', answer: 'Answer 1' },
 *     { question: 'Question 2', answer: 'Answer 2' },
 *     { question: 'Question 3', answer: 'Answer 3' },
 *   ]}
 *   styles={{
 *     container: 'accordion-container',
 *     childContainer: 'accordion-child-container',
 *     details: 'accordion-details-tag',
 *     question: 'accordion-question',
 *     answer: 'accordion-answer',
 *   }}
 * />
 *
 * @param {Object} props - The component props.
 * @param {Array.<{question: string, answer: string}>} props.questions - The array of question objects.
 * @param {Object} props.styles - The styles object for customizing the component.
 * @param {string} [props.styles.container] - The CSS class for the container.
 * @param {string} [props.styles.childContainer] - The CSS class for the child container.
 * @param {string} [props.styles.details] - The CSS class for the details element.
 * @param {string} [props.styles.question] - The CSS class for the question element.
 * @param {string} [props.styles.answer] - The CSS class for the answer element.
 * @returns {JSX.Element} The rendered Accordion component.
 */
const Accordion = ({ questions, styles }: { questions: Pick<Question, "question" | "answer">[]; styles: Styles }) => {
  const [expanded, setExpanded] = useState<Question[]>(
    questions.map((q, index) => ({
      ...q,
      id: index + 1,
      answerId: nanoid(),
      isExpanded: false,
    }))
  );

  const handleExpand = (currentId: number) => {
    setExpanded((prevState) =>
      prevState.map((question) =>
        question.id === currentId ? { ...question, isExpanded: !question.isExpanded } : question
      )
    );
  };

  return (
    <div className={styles?.container}>
      <div className={styles?.childContainer}>
        {expanded.map((question) => (
          <details key={question.id} className={styles?.details}>
            <summary
              aria-controls={question.answerId}
              aria-expanded={question.isExpanded}
              className={styles?.question}
              onClick={() => handleExpand(question.id)}
            >
              {question.question}
            </summary>
            <p id={question.answerId} className={styles?.answer}>
              {question.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
