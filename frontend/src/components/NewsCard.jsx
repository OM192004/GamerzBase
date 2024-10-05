import React from "react";

export default function NewsCard() {
  return (
    <div className="max-w-md mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-102" style={{ width: "350px", height: "500px" }}>
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
      </div>
    </div>
  );
}
