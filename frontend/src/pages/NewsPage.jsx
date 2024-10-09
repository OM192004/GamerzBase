
import React, { useState, useEffect } from 'react';
import NewsCard from "../components/NewsCard";

export default function NewsPage() {
  const [newsData, setNewsData] = useState([]);
  
  // Fetch news data from the backend
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:5000/news/fetchnews');  // Adjust the URL to your backend
        const result = await response.json();

        console.log('Fetched result:', result); 
        if (result.success) {
          setNewsData(result.news);
        } else {
          console.error('Failed to fetch news:', result.message);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);
  return (    
    <div className="bg-bggray text-white p-10">
      <h1 className="text-4xl font-bold mb-8">NEWS</h1>
    <div className="h-[2px] w-full bg-line mb-5"></div>

      {/* Grid container for the event cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {newsData.map((newsItem) => (
      <div
        key={newsItem._id} // Ensure this is unique for each news item
        className="max-w-md mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-102"
        style={{ width: '350px', height: '500px' }}
      >
        {/* Your card content */}
        <NewsCard newsData={newsItem}/>
      </div>
    
    ))}
    <div>
        <div className="text-black  text-sm font-semibold min-h-full px-2.5 py-1  rounded-md duration-300 mx-auto relative group w-fit mt-10">
          <button className="bg-line   px-2.5 py-1 rounded-md hover:bg-red-400">LOAD MORE
            </button>

          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-line scale-x-0 group-hover:scale-x-90 transition-transform duration-300 origin-center mt-7"></span>
        </div>
      
      </div>
    </div>
  );
}
