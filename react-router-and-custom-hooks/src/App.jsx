import { Route, Routes } from "react-router-dom";
import CommentsList from "./pages/comments";
import ReceipeList from "./pages/recipes";

function App() {
  return (
    <>
      <h1>React Routing && Custom Hooks</h1>

      <Routes>
        <Route path="/recipe" element={<ReceipeList />} />
        <Route path="/comment" element={<CommentsList />} />
      </Routes>
    </>
  );
}

export default App;
