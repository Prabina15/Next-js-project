const ProductDetailPage  = async ({params}) => {
    const {id} = await params;

    try {
      const product = await fetch(
      `https://mern-20260320-api.vercel.app/api/products/${id}`,
    );

    if(!product.name){
      throw "Product not found";
    }
     console.log(product)
      
    } catch (error) {
      throw error;
      
    }    

  return (
    <div>Product Details of id: {id} </div>
  )
}

export default ProductDetailPage; 