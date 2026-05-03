import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";

const Product = ({ data }) => {
  return (
    <div className="card bg-base-100 w-full h-full shadow-sm rounded-2xl hover:shadow-[0_0_5px_#3B82F6] transition-all ease-in duration-400">
      <div className="flex justify-center overflow-hidden rounded-t-2xl">
        <Image
          src={data.image}
          alt={data.name}
          width={300}
          height={300}
          className="w-full h-75 object-cover rounded-t-2xl hover:scale-120 transition ease-in-out duration-700"
        ></Image>
      </div>
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <p className="flex items-center gap-2 text-yellow-600">
          <IoStar />
          {data.rating}
        </p>
        <p className="text-[#2563eb] font-bold text-xl">${data.price}</p>
        <div className="card-actions justify-end">
          <button className="btn text-white w-full rounded-xl bg-[#2563eb]">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
