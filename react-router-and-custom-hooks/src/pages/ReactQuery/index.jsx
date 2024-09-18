import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { addNewProduct, fetchListOfProducts } from "./api";

function ReactQueryExample() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);

  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: async () => fetchListOfProducts(),
  });
 
  console.log(data);
  
  const { mutateAsync: handleAddNewProductMutation } = useMutation({
    mutationFn: addNewProduct,
  });

  async function handleAddNewProduct() {
    const re = await handleAddNewProductMutation(productName,productPrice);
    
    setProductName("");
    setProductPrice(0)
    console.log(re);
  }

  function handleInput(e){
    setProductPrice(e.target.value)
  }

  console.log(productPrice);
  
  
  if (isLoading) return <h2>Products is Loading! please wait</h2>;

  return (
    <>
      <h1>ReactQueryExample</h1>

      <div>
        <input
          name="name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter product name"
        />
        <input
          name="price"
          value={productPrice}
          onChange={handleInput}
          placeholder="Enter product price"
        />
        <button
          onClick={handleAddNewProduct}
          disabled={productName.trim() === "" && productName.trim() === ""}
          type="button"
        >
          Add product
        </button>
      </div>

      <ul>
        {data?.length > 0
          ? data.map((item, index) => <li key={index}>{item.name}</li>)
          : []}
      </ul>
    </>
  );
}

export default ReactQueryExample;
