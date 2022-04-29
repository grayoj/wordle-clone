import React, { useContext } from "react";
import { AppContext } from "../../App";

function Letters({ letterPosition, attemptValue }) {
  const { board } = useContext(AppContext);
  const letters = board[letterPosition][attemptValue];
  return <div className="letters">{letters}</div>;
}

export default Letters;
