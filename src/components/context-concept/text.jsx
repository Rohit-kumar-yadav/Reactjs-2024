import { useContext } from "react";
import {GlobalContext}  from "../../context";

function ContextTextComponent() {
  const {theme} = useContext(GlobalContext);
  return <h2 style={{backgroundColor:theme==='light'?'#fff':'#000',color:theme==='light'?'blue':'yellow'}}>This is {theme} Theme</h2>;
}

export default ContextTextComponent;
