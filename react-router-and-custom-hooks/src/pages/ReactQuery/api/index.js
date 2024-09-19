const productList = [
    {
      id: 1,
      name: "Product 1",
      price: 3.4,
    },
    {
      id: 2,
      name: "Product 2",
      price: 55,
    }
  ];

  export const fetchListOfProducts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return productList;
  };

  export const addNewProduct = async (userdata) => {
    console.log("userData: ", userdata);
    await new Promise((res) => setTimeout(res, 1000));

    const newProduct = {
      id: productList.length + 1,
      name: userdata.nameof,
      price: userdata.priceof,
    };

    productList.push(newProduct);

    return newProduct;
  };