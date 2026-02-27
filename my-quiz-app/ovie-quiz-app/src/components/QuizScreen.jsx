import { useEffect, useState } from "react";
import AnswerButton from "./AnswerButton";

function decodeHTML(text) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
}

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function QuizScreen({
    question,
    currentIndex,
    total,
    onAnswer,
    onNext,
}) {

    const [answers, setAnswers] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if (!question) return;

        const mixed = shuffle([
            question.correct_answer,
            ...question.incorrect_answers
        ]);

        setAnswers(mixed);
        setSelected(null);
    }, [question]);

    const handleClick = (answer) => {
        if (selected !== null) return;

        setSelected(answer);
        onAnswer(answer === question.correct_answer);
    };
    return (
        <div>
            <p>Question {currentIndex + 1} of {total}</p>

            <h2>{decodeHTML(question.question)}</h2>

            {answers.map((a) => (
                <AnswerButton
                  key = {a}
                  answer = {a}
                  correct_answer = {question.correct_answer}
                  selected = {selected}
                  onClick = {() => handleClick(a)}
                  />
            ))}

            <br />

            <button
              onClick={onNext}
              disabled={selected === null}
            >
                Next
            </button>
        </div>
    );
}

export default QuizScreen;