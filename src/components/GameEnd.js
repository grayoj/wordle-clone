import { AppContext } from "../App";
import React, { useContext } from "react";

function GameEnd() {
  const { gameEnd, correctWords, currentAttempt } = useContext(AppContext);
  return (
    <div className="gameEnd">
      <h3>{gameEnd.guessedWord ? "You guessed correctly!" : "You failed"}</h3>
      <h1>Correct Word: {correctWords}</h1>
      {gameEnd.guessedWord && (
        <h3>You were able to guess in {currentAttempt.attempt} attempts</h3>
      )}
    </div>
  );
}

export default GameEnd;
