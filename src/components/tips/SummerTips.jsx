import React from "react";
import { FaTree } from "react-icons/fa";
import { GiBilledCap, GiGlassShot } from "react-icons/gi";

const SummerTips = () => {
  return (
    <main className="bg-[#f8fafc]">
      <div className="container mx-auto">
        <div className="text-center py-10 space-y-3">
          <h2 className="text-2xl font-bold">Summer Care Tips</h2>
          <p className="text-gray-400">
            Stay fresh, protected, and healthy this season
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 place-items-center pb-15  px-3">
          <div className="border border-gray-300 rounded-2xl flex flex-col items-center px-17 py-10 space-y-3">
            <GiGlassShot size={80} className="text-blue-400" />
            <h2 className="font-bold text-2xl">Stay Hydrated</h2>
            <p className="text-gray-400">
              Drink at least 8 glasses of water daily to keep your body cool and
              energized throughout the day.
            </p>
          </div>
          <div className="border border-gray-300 rounded-2xl flex flex-col items-center px-17 py-10 space-y-3">
            <FaTree size={80} className="text-green-600" />
            <h2 className="font-bold text-2xl">Skincare Routine</h2>
            <p className="text-gray-400">
              Apply SPF sunscreen every morning and reapply every 2 hours when
              outdoors in the sun.
            </p>
          </div>
          <div className="border border-gray-300 rounded-2xl flex flex-col items-center px-17 py-10 space-y-3">
            <GiBilledCap size={80} className="text-blue-500" />
            <h2 className="font-bold text-2xl">Cover Up Smart</h2>
            <p className="text-gray-400">
              Wear hats and light clothing to shield yourself from harsh UV rays
              and stay cool
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SummerTips;
