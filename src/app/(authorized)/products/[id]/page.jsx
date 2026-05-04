import Image from "next/image";
import { IoStar } from "react-icons/io5";
const ProductsDetails = async ({ params }) => {
  const { id } = await params;
  const fetchProducts = await fetch("http://localhost:3000/productsData.json");
  const res = await fetchProducts.json();
  const specificProduct = res.find((product) => product.id === Number(id));
  const { category, name, rating, price, description, brand, stock, image } =
    specificProduct;
  return (
    <main className="bg-base-200">
      <div className="hero min-h-160 container mx-auto">
        <div className="hero-content flex-col lg:flex-row gap-10 border border-base-300 rounded-2xl p-5 bg-[#2664eb13]">
          <div>
            <Image
              src={image}
              alt="name"
              width={300}
              height={300}
              className="rounded-2xl"
            ></Image>
          </div>
          <div className="space-y-4">
            <span className="px-4 py-1 rounded-full bg-[#dbeafe] text-[#2563eb]">
              {category}
            </span>
            <h1 className="text-3xl font-bold pt-4">{name}</h1>
            <span className="text-yellow-600 flex gap-2 items-center">
              <IoStar></IoStar>
              {rating} rating
            </span>
            <p className="text-[#2563eb] font-bold text-2xl">${price}</p>
            <p className="text-gray-600 font-medium">{description}</p>
            <div className="flex gap-12 items-center">
              <div className="text-gray-400">
                <p>Brand</p>
                <p>Category</p>
                <p>In Stock</p>
              </div>
              <div>
                <p>{brand}</p>
                <p>{category}</p>
                <p className="text-green-600">{stock} units available</p>
              </div>
            </div>
            <button className="btn text-white w-full rounded-xl bg-[#2563eb]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsDetails;
