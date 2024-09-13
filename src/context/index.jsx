import { createContext } from "react";

// create the context

export const GlobalContext = createContext(null);

// create the global state that receipe component as a children

function GlobalState({ children }) {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
}

export default GlobalState;
