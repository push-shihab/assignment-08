"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <main className="bg-[#0f172a]">
      <div className="container mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed="1200"
          className="w-full h-100 relative"
        >
          <div className="flex justify-center absolute top-10 right-170">
            <span className="bg-[#38bdf8] px-3 py-1.5 text-[12px] font-bold rounded-full shadow-lg shadow-[#38bdf8]">
              Summer 2026 Collection
            </span>
          </div>
          <SwiperSlide>
            <div className="h-full flex items-center justify-center text-white font-bold">
              <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-45">
                  <div className="flex flex-col gap-5">
                    <span className="bg-[#1f2638] font-bold flex flex-col items-center px-8 py-4 rounded-2xl shadow-sm shadow-[#38bdf8]">
                      <span className="text-2xl text-[#38bdf8]">50% OFF</span>
                      <span className="text-gray-400">Summer Sale</span>
                    </span>
                    <span className="bg-[#1f2638] font-bold flex flex-col items-center px-8 py-4 rounded-2xl shadow-sm shadow-[#f59e0b]">
                      <span className="text-2xl text-[#f59e0b]">
                        Hot Deals🔥
                      </span>
                      <span className="text-gray-400">Limited Time Only</span>
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h1 className="text-5xl font-bold">
                      Beat the Heat,
                      <br />
                      Look <span className="text-[#38bdf8]">Amazing</span>
                    </h1>
                    <p className="text-gray-400">
                      Shop top summer essentials — sunglasses, skincare & more
                    </p>
                    <div className="flex gap-2 pt-3">
                      <button className="btn text-white border-none shadow-none bg-[#2563eb]">
                        Shop Now
                      </button>
                      <button className="btn btn-outline border-[#38bdf8] text-[#38bdf8]">
                        View Deals
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-full flex items-center justify-center text-white font-bold">
              <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-45">
                  <div className="flex flex-col gap-5">
                    <span className="bg-[#1f2638] font-bold flex flex-col items-center px-8 py-4 rounded-2xl shadow-sm shadow-[#38bdf8]">
                      <span className="text-2xl text-[#38bdf8]">50% OFF</span>
                      <span className="text-gray-400">Summer Sale</span>
                    </span>
                    <span className="bg-[#1f2638] font-bold flex flex-col items-center px-8 py-4 rounded-2xl shadow-sm shadow-[#f59e0b]">
                      <span className="text-2xl text-[#f59e0b]">
                        Hot Deals🔥
                      </span>
                      <span className="text-gray-400">Limited Time Only</span>
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h1 className="text-5xl font-bold">
                      Escape the heat in
                      <br />
                      effortless
                      <span className="text-[#38bdf8]"> Modern Fashion</span>
                    </h1>
                    <p className="text-gray-400">
                      Your perfect summer collection starts here
                    </p>
                    <div className="flex gap-2 pt-3">
                      <button className="btn text-white border-none shadow-none bg-[#2563eb]">
                        Shop Now
                      </button>
                      <button className="btn btn-outline border-[#38bdf8] text-[#38bdf8]">
                        View Deals
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-full flex items-center justify-center text-white font-bold">
              <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-45">
                  <div className="flex flex-col gap-5">
                    <span className="bg-[#1f2638] font-bold flex flex-col items-center px-8 py-4 rounded-2xl shadow-sm shadow-[#38bdf8]">
                      <span className="text-2xl text-[#38bdf8]">50% OFF</span>
                      <span className="text-gray-400">Summer Sale</span>
                    </span>
                    <span className="bg-[#1f2638] font-bold flex flex-col items-center px-8 py-4 rounded-2xl shadow-sm shadow-[#f59e0b]">
                      <span className="text-2xl text-[#f59e0b]">
                        Hot Deals🔥
                      </span>
                      <span className="text-gray-400">Limited Time Only</span>
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h1 className="text-5xl font-bold">
                      Hot days call for
                      <br />
                      <span className="text-[#38bdf8]">Cooler Outfits</span>
                    </h1>
                    <p className="text-gray-400">
                      Discover must-have summer picks for every sunny adventure
                    </p>
                    <div className="flex gap-2 pt-3">
                      <button className="btn text-white border-none shadow-none bg-[#2563eb]">
                        Shop Now
                      </button>
                      <button className="btn btn-outline border-[#38bdf8] text-[#38bdf8]">
                        View Deals
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
};

export default Banner;
