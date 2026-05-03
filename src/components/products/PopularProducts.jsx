import Product from "./Product";

const PopularProducts = async () => {
  const productsData = await fetch("http://localhost:3000/products.json");
  const res = await productsData.json();
  const topRatedProducts = res.filter((product) => product.rating > 4.6);
  return (
    <main className="bg-[#eff6ff]">
      <div className="container mx-auto">
        <div className="text-center py-10 space-y-3">
          <h2 className="text-2xl font-bold">Popular Products</h2>
          <p className="text-gray-400">Trending picks for this summer</p>
        </div>
        <div className="grid grid-cols-3 gap-4 place-items-center pb-15">
          {topRatedProducts.map((data) => (
            <Product key={data.id} data={data}></Product>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PopularProducts;
