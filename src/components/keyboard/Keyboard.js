import React, { useCallback, useEffect, useContext } from "react";
import { AppContext } from "../../App";
// Import Key module
import Keys from "./Keys";

function Keyboard() {
  // Create a constant assigned to each string to store Keyboard characters.
  const keysOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keysTwo = ["A", "S", "D", "F", "G", "H", "J", "k", "L"];
  const KeysThree = ["Z", "X", "C", "V", "B", "N", "M"];

  const { onEnter, onDelete, onSelectLetters, disableLetters } =
    useContext(AppContext);

  const handleKeyboard = useCallback((event) => {
    if (event.key === "ENTER") {
      onEnter();
    } else if (event.key === "Backspave") {
      onDelete();
    } else {
      keysOne.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase) {
          onSelectLetters(key);
        }
      });
      keysTwo.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase) {
          onSelectLetters(key);
        }
      });
      KeysThree.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase) {
          onSelectLetters(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    // Keyboard rows and keys
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="row1">
        {keysOne.map((key) => {
          return (
            <Keys keyValue={key} disableKey={disableLetters.includes(key)} />
          );
        })}
      </div>
      <div className="row2">
        {keysTwo.map((key) => {
          return (
            <Keys keyValue={key} disableKey={disableLetters.includes(key)} />
          );
        })}
      </div>
      <div className="row3">
        <Keys keyValue={"ENTER"} largeKey />
        {KeysThree.map((key) => {
          return (
            <Keys keyValue={key} disableKey={disableLetters.includes(key)} />
          );
        })}
        <Keys keyValue={"DELETE"} largeKey />
      </div>
    </div>
  );
}

export default Keyboard;
