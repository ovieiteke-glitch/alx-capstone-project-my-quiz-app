function decodeHTML(text) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
}

function AnswerButton({
    answer,
    correctAnswer,
    selected,
    onClick
})  {
    let className = "";

    if (selected !== null) {
        if (answer === correctAnswer) className = "correct";
        else if (answer === selected) className = "wrong";
    }

    return (
        <button
          className={className}
          dsabled={selected !== null}
          onClick={onClick}
        >
            {decodeHTML(answer)}
        </button>
    );
}

export default AnswerButton;