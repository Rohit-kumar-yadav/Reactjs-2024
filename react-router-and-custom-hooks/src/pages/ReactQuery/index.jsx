import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addNewProduct, fetchListOfProducts } from "./api";

function ReactQueryExample() {
  const [userdata, setuserdata] = useState({
    nameof: "",
    priceof: ""
  });

  const getqueryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: async () => fetchListOfProducts(),
  });

  const { mutateAsync: handleAddNewProductMutation } = useMutation({
    mutationFn: addNewProduct,
    onSuccess:()=>[
      getqueryClient.invalidateQueries("data"),
    ]
  });

  async function handleAddNewProduct(e) {
    e.preventDefault();
    const re = await handleAddNewProductMutation(userdata);
    console.log("re is: ", re);
    setuserdata({ nameof: "", priceof: "" });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setuserdata((prevState) => ({
      ...prevState,
      [name]: name === "priceof" ? parseFloat(value) : value,
    }));
  };

  console.log(userdata);
  

  if (isLoading) return <h2>Products are Loading! Please wait...</h2>;

  return (
    <>
      <h1>ReactQueryExample</h1>
      <div>
        <input
          name="nameof"
          value={userdata.nameof}
          onChange={handleInputChange}
          placeholder="Enter product name"
        />
        <input
          name="priceof"
          value={userdata.priceof}
          onChange={handleInputChange}
          placeholder="Enter product price"
        />
        <button
          onClick={handleAddNewProduct}
          disabled={userdata.nameof.trim() === "" || userdata.priceof === ""}
          type="button"
        >
          Add product
        </button>
      </div>

      <ul>
        {data?.length > 0
          ? data.map((item, index) => <li key={index}>{item.name} - {item.price}</li>)
          : []}
      </ul>
    </>
  );
}

export default ReactQueryExample;