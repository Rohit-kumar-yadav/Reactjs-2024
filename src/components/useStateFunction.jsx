import { useState } from "react";

function useStateFunction() {
  const [flag, setFlag] = useState(false);

  function handleToggleText(){
     setFlag(!flag);
  }

  return <>
  {flag ? <p>Toggle On</p> : <p>Toggle Off</p>}
  <button onClick={handleToggleText}>Toggle Text</button>
  </>;
}

export default useStateFunction;