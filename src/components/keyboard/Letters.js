import React, { useContext, useEffect } from "react";
import { AppContext } from "../../App";

function Letters({ letterPosition, attemptValue }) {
  const { board, correctWords, currentAttempt, setDisableLetters } =
    useContext(AppContext);
  const letters = board[attemptValue][letterPosition];
  // Check if letters are correct or not
  const correct = correctWords.toUpperCase()[letterPosition] === letters;
  const nearly = !correct && letters !== "" && correctWords.includes(letters);

  const lettersState =
    currentAttempt.attempt > attemptValue &&
    (correct ? "correct" : nearly ? "nearly" : "wrong");

  useEffect(() => {
    if (letters !== "" && !correct && !nearly) {
      setDisableLetters((prev) => [...prev, letters]);
    }
  }, [currentAttempt.attempt]);

  return (
    <div className="letters" id={lettersState}>
      {""}
      {letters}
    </div>
  );
}

export default Letters;
