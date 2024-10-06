import React from "react";
import EventCard from "./EventCard";

export default function EventList() {
  return (
    <div className="bg-bggray text-white p-10">
      <h1 className="text-4xl font-bold mb-8">EVENTS</h1>
      <div className="h-[2px] w-full bg-line mb-5"></div>
      {/* Grid container for the event cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />

      </div>
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
