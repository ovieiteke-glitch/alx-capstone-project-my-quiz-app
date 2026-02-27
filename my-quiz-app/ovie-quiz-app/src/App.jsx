import { useState } from 'react'
import StartScreen from "./StartScreen";
import QuizScreen from "./QuizScreen";
import ResultScreen from "./ResultScreen";
import LoadingScreen from "./LoadingScreen";

function App() {
  const [screen, SetScreen] = useState("start"); //Start, loading, quiz, result
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const startQuiz = async (difficulty) => {
    SetScreen("loading");

    let url = "https://opentdb.com/api.php?amount=5&type=multiple";
    if (difficulty) {
      url += '&difficulty=$(difficulty)';
    }
    const response = await fetch(url);
    const data = await response.json();

    setQuestions(data.results);
    setCurrentIndex(0);
    setScore(0);
    SetScreen("quiz");
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    } 
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setcurrentIndex(prev => prev + 1);
    } else {
      SetScreen("result");
    }
  };
  const restart = () => {
    SetScreen("start");
    setQuestions([]);
  };
  return (
    <>
    {screen === "start" && <startScreen onStart={startQuiz} />}
    {screen === "loading" && <loadingScreen />}
    {screen === "quiz" && (
      <QuizScreen
        question={questions[currentIndex]}
        currentIndex={currentIndex}
        total={questions.length}
        onAnswer={handleAnswer}
        onNext={nextQuestion}
      />
    )}
     {screen === "result" && (
      <ResultScreen
        score = {score}
        total = {questions.length}
        onRestart = {restart} 
        />
     )}
    </>
  );
} 

export default App;
