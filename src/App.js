import "./App.css";
import React, { useState, createContext } from "react";
import Keyboard from "./components/keyboard/Keyboard";
import Board from "./components/Board";
import { defaultBoard } from "./components/keyboard/Word";

export const AppContext = createContext();

function App() {
  //Create a state that handles the board
  const [board, setBoard] = useState(defaultBoard);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0});

  //create handlers for each button
  const onSelectLetters = (keyValue) => {
    if (currentAttempt.letterPosition > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] =
      keyValue;
    setBoard(newBoard);
    //Increment on attempts
    setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition +1});
  };
  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition - 1});
  }

  const onEnter = () => {
    if (currentAttempt.letterPosition !== 5) return;
    setCurrentAttempt({
      attempt: currentAttempt.attempt + 1,
      letterPosition: 0,
    });
  }

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currentAttempt, setCurrentAttempt, onSelectLetters, onDelete, onEnter }}>
      <div className="wordle-container">
        <Board />
        <Keyboard />
      </div>
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
