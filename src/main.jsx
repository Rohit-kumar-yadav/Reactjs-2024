import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalState from "./context/index.jsx";
import Main from "../react-router-and-custom-hooks/src/main.jsx"
createRoot(document.getElementById("root")).render(
  <GlobalState>
    <Main/>
  </GlobalState>
);
