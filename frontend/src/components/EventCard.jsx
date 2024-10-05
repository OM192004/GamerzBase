import React from "react";
import { Link } from "react-router-dom";

export default function EventCard() {
  return (
    <div className="bg-new text-white rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-102">
      <div className="relative">
        {/* Image */}
        <img
          src="/event.webp"
          alt="Valorant player silhouette"
          className="w-full h-48 object-cover object-center transition-transform duration-300 ease-in-out"
          style={{ width: "500px", height: "250px" }}
        />
        {/* Red overlay on hover */}
        <div className="absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-700 ease-in-out hover:opacity-50"></div>
      </div>

      <div className="p-6">
        <p className="text-sm text-gray-400 mb-2">24 July 2024</p>
        <h2 className="text-xl font-semibold mb-2">
          Everything You Need to Know: Champions Seoul
        </h2>
        <p className="text-gray-400 mb-4">
          Tournament match-ups, format, schedule, and more!
        </p>

        <div className="group relative mt-5 max-w-fit mx-auto">
          <Link
            to="/EventDetails"
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
