import React, { useMemo, useState } from "react";
import useFetch from "../../hooks/use-fetch";

function UseMemo() {
  const { data, loading } = useFetch('https://dummyjson.com/products');
  const [flag,setFlage] = useState(false);

  function filterProductByPrice(getProducts) {
    console.log("This function is getting rendered");
    
    return getProducts?.length > 0
      ? getProducts.filter(
          (singleProductItem) => singleProductItem.price > 100
        )
      : [];
  }
  const filteredItems =useMemo(()=>
    filterProductByPrice(data?.products),
  [data?.products]
  ) 

  if (loading) return <h1>Loading data! Please wait</h1>;

  return (
    <div>
      <h1 style={{color:flag?'red':'black'}}>Use Memo</h1>
      <button onClick={()=>setFlage(!flag)}>Toggle</button>
      <ul>
        {
            filteredItems.map((item,id) => <li key={id}>{item?.title}</li>)
            
        }
      </ul>
    </div>
  );
}

export default UseMemo;
