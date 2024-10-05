import React from "react";
import NewsCard from "../components/NewsCard";


export default function NewsPage() {
  return (
    <div className="bg-backscreen text-white p-10">
      <h1 className="text-4xl font-bold mb-8">NEWS</h1>

      {/* Grid container for the event cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
      </div>
    </div>
  );
}
