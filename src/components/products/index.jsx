import ProductItem from "./components/product-item";

function ProductList({ listitems }) {
  return (
    <div>
      <h2>Ecommerce Project</h2>
    
        {listitems.map((product,index) => (  
          <ProductItem singleProductItem={product} key={index}/>
        ))}
      
    </div>
  );        
}

export default ProductList;
