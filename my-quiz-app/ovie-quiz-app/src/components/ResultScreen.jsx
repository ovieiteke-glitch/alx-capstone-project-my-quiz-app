function ResultScreen({ score, total, onRestart }) {
    return (
        <div>
            <h2>Your Score</h2>
            <p>{score} / {total}</p>

            <button onClick={onRestart}>
              Play Again
            </button>
        </div>
    );
}

export default ResultScreen;