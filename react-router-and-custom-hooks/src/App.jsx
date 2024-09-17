import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import CommentsList from "./pages/comments";
import ReceipeList from "./pages/recipes";
import RecipeDetails from "./pages/RecipeDynamicPage/RecipeDetails";
import NotFoundPage from "./pages/not-found";
import Layout from "./components/layout";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // console.log(location);

  return (
    <>
      <h1>React Routing && Custom Hooks</h1>

      <div>
        <Link to={"/home/comment"}>Alternative way to Navigate</Link>
      </div>
      <button
        onClick={() => navigate("/home/recipe")}
        style={{ background: "blue", color: "yellow" }}
      >
        Navigate to Recipe List Page
      </button>

      <button
        onClick={() => navigate("/home/comment")}
        style={{ background: "blue", color: "yellow" }}
      >
        Navigate to comment List Page
      </button>
      <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="recipe" element={<ReceipeList />} />
          <Route path="comment" element={<CommentsList />} />
          <Route path="recipe/:id" element={<RecipeDetails />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
