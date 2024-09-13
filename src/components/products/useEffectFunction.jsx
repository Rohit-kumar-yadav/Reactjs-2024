import { useEffect, useState } from "react";

function useEffectFunction() {
  const [count, setCount] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);

  useEffect(()=>{
       console.log("i will run on everytime u refresh the page");
       
       return()=>{
         console.log("component unmounted");
         
       }
  })

  useEffect(() => {
    if (count === 10) setChangeStyle(true);
  }, [count]);

  console.log(changeStyle);

  return (
    <>
      <p>{count}</p>
      <button
        style={{
          backgroundColor: changeStyle ? "black" : "white",
          color: changeStyle ? "whitesmoke" : "black",
        }}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </>
  );
}

export default useEffectFunction;
