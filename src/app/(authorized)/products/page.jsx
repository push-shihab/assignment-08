import Product from "@/components/products/Product";
import React from "react";

const AllProducts = async () => {
  const productsData = await fetch("http://localhost:3000/productsData.json");
  const res = await productsData.json();
  return (
    <main className="bg-[#eff6ff]">
      <div className="container mx-auto">
        <div className="text-center py-10 space-y-3">
          <h2 className="text-2xl font-bold">All Products</h2>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-4 place-items-center pb-8">
          {res.map((data) => (
            <Product key={data.id} data={data}></Product>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllProducts;
