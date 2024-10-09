import React from "react";
import { Link } from "react-router-dom";

export default function NewsCard() {
  return (
    <div className=" bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-102" style={{ width: "320px", height: "450px" }}>
      <div className="relative">
        {/* Image */}
        <img
          src="/news1.png"
          alt="Valorant player silhouette"
          className="w-full h-48 object-cover object-center transition-transform duration-300 ease-in-out"
          style={{ width: "400px", height: "200px" }}
        />
        {/* Red overlay on hover */}
        <div className="absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-700 ease-in-out hover:opacity-50"></div>
      </div>
      {/* Centered content */}
      <div className="p-4 flex flex-col justify-center items-center">
        <h3 className="p-2 text-xl font-bold text-white leading-tight text-center">
          VALORANT Game Changers EMEA Updates: Stage 3 Finals Venue and New Mixed Tournament Revealed!
        </h3>
        <p className="text-sm text-gray-400 text-center">20 August 2024</p>

        <div className="group relative mt-5 max-w-fit mx-auto">
          <Link
            to="/NewsDetails"
            className="text-line text-sm font-semibold min-h-fit px-2.5 py-1 rounded-md duration-300"
          >
            READ MORE...
          </Link>
          {/* Underline effect */}
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </div>
      </div>
    </div>
  );
}
