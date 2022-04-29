import "./App.css";
import React, { useState, createContext, useEffect } from "react";
import Keyboard from "./components/keyboard/Keyboard";
import Board from "./components/Board";
import { createWordSet, defaultBoard } from "./components/keyboard/Word";
import GameEnd from "./components/GameEnd";

export const AppContext = createContext();

function App() {
  //Disable Letters 
  const [disableLetters, setDisableLetters] = useState([]);


  //Create constants for wordSets
  const [wordSets, setWordSets] = useState(new Set())

  //Create a state that handles the board
  const [board, setBoard] = useState(defaultBoard);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0});
  const [gameEnd, setGameEnd] = useState({gameOver: false, guessedWord: false,})

  const correctWords = "RIGHT";

  //UseEffect to generate correct set

  useEffect(() => {
    //Return promise from asynchronous function
    createWordSet().then((words) => {
      setWordSets(words.wordSets)
    })
  }, [])

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

    let currentWord = "";
    // Loop through the letters five times
    for (let i = 0; i < 5; i++) {
      currentWord += board[currentAttempt.attempt][i];

    }
    //Proceed if input has current word we are looking for.
    if (wordSets.has(currentWord.toLowerCase())) {
      setCurrentAttempt({attempt: currentAttempt.attempt + 1, 
        letterPosition: 0});
    } else {
      alert('The word you entered was not found!')
    }

    if(currentWord === correctWords) {
      setGameEnd({gameEnd: true, guessedWord: true});
      return;
    }

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
      <AppContext.Provider value={{ board, setBoard, currentAttempt, setCurrentAttempt, onSelectLetters, onDelete, onEnter, correctWords, setDisableLetters, disableLetters, setGameEnd, gameEnd}}>
      <div className="wordle-container">
        <Board />
        {gameEnd.gameEnd ? <GameEnd /> : <Keyboard />}
      </div>
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
