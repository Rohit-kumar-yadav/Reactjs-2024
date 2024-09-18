
const productList = [
    {
        "id": 1,
        "name": "Product 1",
        "price": 10.99,
    },
    {
        "id": 2,
        "name": "Product 2",
        "price": 5.99,
    },
    {
        "id": 3,
        "name": "Product 3",
        "price": 7.99,
    },
    {
        "id": 4,
        "name": "Product 4",
        "price": 12.99,
    },
    {
        "id": 5,
        "name": "Product 5",
        "price": 17.99,
    }
]

export const fetchListOfProducts = async()=>{
      await new Promise((resolve)=> setTimeout(resolve,1000))
      return productList
}

export const addNewProduct = async(productName,productPrice) =>{
    await new Promise ((res)=>setTimeout(res,1000))

    const newProduct = {
        id:productList.length+1,
        name:productName,
        price:Number(productPrice)
    }

    productList.push(newProduct)

    return newProduct;
}