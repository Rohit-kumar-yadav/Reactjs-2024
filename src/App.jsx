import "./App.css";

import ProductList from "./components/products";
import ClassBasedComponents from "./components/class-based-components";
import UseStateFunction from "./components/useStateFunction";
let dummyProductData = ["product 1", "product 2", "product 3"];
import UseEffectFunction from "./components/products/useEffectFunction";
import Users from "./components/products/components/users";
import ContextButtonComponent from "./components/context-concept/button";
import ContextTextComponent from "./components/context-concept/text";
function App() {
  return (
    <div>
      <h1>React js Concept 2024</h1>
      {/* <Users /> */}
      {/* <UseEffectFunction />
      <UseStateFunction />
      <ProductList listitems={dummyProductData}/>
      <ClassBasedComponents /> */}
      {/* <FunctionalComponent /> */}
      <ContextButtonComponent />
      <ContextTextComponent />
    </div>
  );
}

export default App;
