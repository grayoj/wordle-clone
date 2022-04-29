import React from "react";

//Register keyValue and largeKey
function Keys({ keyValue, largeKey }) {
  return (
    <div className="keys" id={largeKey && "big"}>
      {keyValue}
    </div>
  );
}

export default Keys;
