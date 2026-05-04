import Product from "@/components/products/Product";
import React from "react";
import productsData from "../../../../public/productsData.json";

const AllProducts = async () => {
  return (
    <main className="bg-[#eff6ff]">
      <div className="container mx-auto">
        <div className="text-center py-10 space-y-3">
          <h2 className="text-2xl font-bold">All Products</h2>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-4 place-items-center pb-8">
          {productsData.map((data) => (
            <Product key={data.id} data={data}></Product>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllProducts;
