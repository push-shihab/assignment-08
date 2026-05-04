"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoStar } from "react-icons/io5";
import { useSpring, animated } from "@react-spring/web";

const Product = ({ data }) => {
  const springs = useSpring({
    from: { y: 200 },
    to: { y: 0 },
  });
  const styles = useSpring({
    loop: true,
    to: [{ transform: "translateY(-8px)" }, { transform: "translateY(0px)" }],
    from: {
      transform: "translateY(0px)",
    },
    config: {
      duration: 1200,
    },
  });
  return (
    <animated.div
      style={{
        width: 400,
        height: 420,
        ...springs,
        config: {
          tension: 100,
          friction: 12,
        },
      }}
    >
      <div className="card bg-base-100 w-full h-full shadow-sm rounded-2xl hover:shadow-[0_0_5px_#3B82F6] transition-all ease-in duration-400 overflow-hidden">
        <div className="flex justify-center overflow-hidden">
          <Image
            src={data.image}
            alt={data.name}
            width={300}
            height={300}
            loading="eager"
            className="w-full h-75 object-cover hover:scale-110 transition duration-700 ease-in-out"
          />
        </div>

        <div className="card-body">
          <h2 className="card-title">{data.name}</h2>

          <p className="flex items-center gap-2 text-yellow-600">
            <IoStar />
            {data.rating}
          </p>

          <p className="text-[#2563eb] font-bold text-xl">${data.price}</p>

          <div className="card-actions justify-end">
            <animated.button style={styles}>
              <Link
                href={`/products/${data.id}`}
                className="btn text-white w-full rounded-xl bg-[#2563eb]"
              >
                View Details
              </Link>
            </animated.button>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Product;
