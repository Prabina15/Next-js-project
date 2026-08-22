export const metadata = {
  title : "Products",
}
const ProductPage = async({ searchParams}) => {
console.log(await searchParams);

  const products = await fetch(
    `https://mern-20260320-api.vercel.app/api/products`,
  ).then(res => res.json());

  return (
    <div>ProductPage</div>
  )
}

export default ProductPage