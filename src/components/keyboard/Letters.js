import React, { useContext } from "react";
import { AppContext } from "../../App";

function Letters({ letterPosition, attemptValue }) {
  const { board } = useContext(AppContext);
  const letters = board[attemptValue][letterPosition];
 
  
  return (
  <div className="letters" id={"correct"}>
    {""}
    {letters}
  </div>
  );
}

export default Letters;
