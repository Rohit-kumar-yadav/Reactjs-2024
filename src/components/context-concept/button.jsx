import { useContext } from "react";
import {GlobalContext} from "../../context";

function ContextButtonComponent() {

  const{theme,setTheme} = useContext(GlobalContext);


  const handleClick =()=>{
        setTheme(theme==='light'?'dark':'light');
  }


  return <button onClick={handleClick}>Change Theme</button>;
}

export default ContextButtonComponent;
