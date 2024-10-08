
import React, { useState, useEffect } from 'react';

export default function NewsCard({newsData}) {



  return (

    <div>
          <div
            key={newsData._id}
            className=" bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-102" style={{ width: "320px", height: "450px" }}
          >
            <div className="relative">
              {/* Image */}
              <img
                src={newsData.imageUrl || '/defaultImage.png'}  // Display default image if no image URL is available
                alt={newsData.title}
                className="w-full h-48 object-cover object-center transition-transform duration-300 ease-in-out"
                style={{ width: '400px', height: '200px' }}
              />
              {/* Red overlay on hover */}
              <div className="absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-700 ease-in-out hover:opacity-50"></div>
            </div>
            {/* Centered content */}
            <div className="p-4 flex flex-col justify-center items-center">
              <h3 className="p-2 text-xl font-bold text-white leading-tight text-center">
                {newsData.title}
              </h3>
              <p className="text-sm text-gray-400 text-center">
                {new Date(newsData.createdAt).toLocaleDateString()}  {/* Format the date */}
              </p>
              <p className="text-sm text-gray-300 text-center mt-2">
                {newsData.description}
              </p>
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
      
       : (
        <p className="text-white text-center">Loading news...</p>
      )
    </div>
  );
}
