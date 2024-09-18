
import React, { useEffect, useRef } from 'react'

function Useref() {
    const count = useRef(0);
    const DomRef = useRef();
    const refName = useRef();
    function handleClick(){
        count.current++;
        console.log(count.current);
    }

    useEffect(()=>{
      const domref = DomRef.current;
      refName.current.focus();
      

      setInterval(() => {
        domref.style.color ="red";
        setTimeout(() => {
          domref.style.color ="blue";
        }, 1000);
      }, 2000);
    })
  return (
    <div>
    <button onClick={handleClick}>Increment</button>
    <div style={{fontSize:"30px"}} ref={DomRef}>Hello bacho</div>
    <input ref={refName} type="text" placeholder='Enter your name' />
    </div>
  )
}

export default Useref;