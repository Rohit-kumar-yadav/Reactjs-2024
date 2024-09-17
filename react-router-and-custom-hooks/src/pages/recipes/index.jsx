import useFetch from "../../hooks/use-fetch";
import useWindowResize from "../../hooks/use-window-Resize";

function ReceipeList() {
  const { data, loading, err } = useFetch("https://dummyjson.com/recipes");
  const windowsize = useWindowResize();

  if (loading) return <h1>Fetching recipes! Please Wait</h1>;


  return (
    <div>
      <h1>Recipe list</h1>
      <p>height of this window is:{windowsize.height} and width of this window is:{windowsize.width}</p>

      <ul style={{}}>
        {data?.recipes?.length > 0
          ? data?.recipes.map((recipeItem) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <img style={{ width: "250px" }} src={recipeItem?.image} />
                <label>{recipeItem?.name}</label>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}

export default ReceipeList;
