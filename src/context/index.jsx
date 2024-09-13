import { createContext, useState } from "react";

// create the context

export const GlobalContext = createContext(null);

// create the global state that receipe component as a children

function GlobalState({ children }) {
  const[theme,setTheme] = useState('light');
  return <GlobalContext.Provider value={{theme,setTheme}}>{children}</GlobalContext.Provider>;
}

export default GlobalState;
