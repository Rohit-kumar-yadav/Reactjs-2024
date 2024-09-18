import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useRoutes,
} from "react-router-dom";
import CommentsList from "./pages/comments";
import ReceipeList from "./pages/recipes";
import RecipeDetails from "./pages/RecipeDynamicPage/RecipeDetails";
import NotFoundPage from "./pages/not-found";
import Layout from "./components/layout";
import ReaCtHookFormExample from "./pages/react-hook-form";
import Useref from "./pages/hooks/useref";
import UseMemo from "./pages/hooks/useMemo";
import UseCallback from "./pages/hooks/useCallbackExample/useCallback";
import ReactQueryExample from "./pages/ReactQuery";

function CustomHook() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          path: "/home/recipe",
          element: <ReceipeList />,
        },
        { path: "/home/comment", element: <CommentsList /> },
        { path: "/home/recipe/:id", element: <RecipeDetails /> },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
    {
      path: "/react-hook-form",
      element: <ReaCtHookFormExample />,
    },
    {
      path:'/hooks',
      element:<UseCallback/>
    },{
      path:'/react-query-demo',
      element:<ReactQueryExample/>
    }

  ]);

  return element;
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // console.log(location);

  return (
    <>
    
      {/* <h1>React Routing && Custom Hooks</h1> */}
      <CustomHook />
      {/* <div>
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
      </button> */}

      {/* <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="recipe" element={<ReceipeList />} />
          <Route path="comment" element={<CommentsList />} />
          <Route path="recipe/:id" element={<RecipeDetails />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes> */}
    
    </>
  );
}

export default App;
