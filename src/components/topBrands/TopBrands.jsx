import Image from "next/image";
import React from "react";

const TopBrands = () => {
  return (
    <main className="bg-gray-50 border-t border-gray-300">
      <div className="container mx-auto">
        <div className="text-center py-10 space-y-3">
          <h2 className="text-2xl font-bold">Top Brands</h2>
          <p className="text-gray-400">Premium summer brands we carry</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 place-items-center pb-15  px-3">
          <div className="border border-gray-300 rounded-2xl flex flex-col items-center px-17 w-full py-10 space-y-3 h-full justify-center">
            <div className="bg-[#eff6ff] px-5 rounded-2xl">
              <Image
                src="https://iconlogovector.com/uploads/images/2025/09/lg-68c20110b2876-COSRX.webp"
                alt="Cosrx"
                width={100}
                height={100}
                className="w-auto h-auto"
              ></Image>
            </div>
            <h2 className="font-bold text-xl">Cosrx</h2>
            <p className="text-gray-400">Advanced Skincare</p>
          </div>
          <div className="border border-gray-300 rounded-2xl flex flex-col items-center px-17 py-10 space-y-3 h-full justify-center w-full">
            <div className="bg-[#eff6ff] px-5 py-10 rounded-2xl">
              <Image
                src="https://brandlogos.net/wp-content/uploads/2014/11/neutrogena-logo_brandlogos.net_ryb8q-512x107.png"
                alt="Neutrogena"
                width={100}
                height={100}
                className="w-auto h-auto"
              ></Image>
            </div>
            <h2 className="font-bold text-2xl">Neutrogena</h2>
            <p className="text-gray-400">Hydro Boost</p>
          </div>
          <div className="border border-gray-300 rounded-2xl flex flex-col items-center px-17 py-10 space-y-3 h-full justify-center w-full">
            <div className="bg-[#eff6ff] px-5 rounded-2xl">
              <Image
                src="https://vectorseek.com/wp-content/uploads/2023/09/Cetaphil-Logo-Vector.svg-.png"
                alt="Cetaphil"
                width={100}
                height={100}
                className="w-auto h-auto"
              ></Image>
            </div>
            <h2 className="font-bold text-2xl">Cetaphil</h2>
            <p className="text-gray-400">Gentle Skincare</p>
          </div>
          <div className="border border-gray-300 rounded-2xl flex flex-col items-center px-17 py-10 space-y-3 h-full justify-center w-full">
            <div className="bg-[#eff6ff] px-5 py-10 rounded-2xl">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Innisfree-logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20230310021533"
                alt="Innisfree"
                width={100}
                height={100}
                className="w-auto h-auto"
              ></Image>
            </div>
            <h2 className="font-bold text-2xl">Innisfree</h2>
            <p className="text-gray-400">Natural Beauty</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TopBrands;
