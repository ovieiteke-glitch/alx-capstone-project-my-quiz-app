import { useState } from "react";
function StartScreen({ onStart }) {
    const [difficulty, setDifficulty] = useState("");
    
    return (
        <div>
            <h1>Ovie's Quiz App</h1>
            <label>
            Difficulty:
            <select 
               value={difficulty}
               onChange={(e) => setDifficulty(e.target.value)}
            >
               <option value="">Any</option>
               <option value="">Easy</option>
               <option value="medium">Medium</option>
               <option value="hard">Hard</option>
        </select>
        </label>

        <br /><br />

        <button onClick={() => onStart(difficulty)}>
            Start Quiz
        </button>
        </div>

    )
}

export default StartScreen;