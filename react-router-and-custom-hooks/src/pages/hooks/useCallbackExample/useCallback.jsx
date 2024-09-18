import React, { useCallback, useState } from "react";
import Counter from "./counter";

function UseCallback() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const memoriseSetCounterOneFunc = useCallback(
    () => setCountOne(countOne + 1),
    [countOne]
  );
  const memoriseSetCounterTwoFunc = useCallback(
    () => setCountTwo(countTwo + 2),
    [countTwo]
  );

  return (
    <>
      <div>useCallback</div>
      <Counter
        countValue={countOne}
        onClick={memoriseSetCounterOneFunc}
      />
      <Counter
        countValue={countTwo}
        onClick={memoriseSetCounterTwoFunc}
      />
    </>
  );
}

export default UseCallback;
