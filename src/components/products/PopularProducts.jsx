import Product from "./Product";
import Link from "next/link";
import productsData from "../../../public/productsData.json";

const PopularProducts = async () => {
  const topRatedProducts = productsData.filter(
    (product) => product.rating > 4.6,
  );
  return (
    <main className="bg-[#eff6ff]">
      <div className="container mx-auto">
        <div className="text-center py-10 space-y-3">
          <h2 className="text-2xl font-bold">Popular Products</h2>
          <p className="text-gray-400">Trending picks for this summer</p>
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center pb-8">
          {topRatedProducts.map((data) => (
            <Product key={data.id} data={data}></Product>
          ))}
        </div>
        <div className="text-center pb-8">
          <Link
            href={"/products"}
            className="btn text-white border-none shadow-none bg-[#2563eb]"
          >
            More Products
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PopularProducts;
