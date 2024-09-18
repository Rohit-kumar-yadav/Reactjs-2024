import React, { memo } from "react";

function Counter({ countValue, onClick }) {
    console.log(`This is getting rendered ${countValue}`);
    
  return (
    
    <div>
      <p>{countValue}</p>
      <button onClick={onClick}>Tap</button>
    </div>
  );
}

export default memo(Counter);
