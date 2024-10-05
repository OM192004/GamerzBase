import React from "react";
import EventCard from "./EventCard";

export default function EventList() {
  return (
    <div className="bg-backscreen text-white p-10">
      <h1 className="text-4xl font-bold mb-8">EVENTS</h1>

      {/* Grid container for the event cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
      </div>
    </div>
  );
}
