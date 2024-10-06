import React from "react";
import GameCard from "../components/GameCard";
import Sponsers from "../components/Sponsers";

export default function EventList() {
  return (
    <div className="bg-backscreen text-white p-10">
      <h1 className="text-4xl font-bold mb-8">GAMES</h1>

      {/* Grid container for the event cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 ">
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />

        <Sponsers/>
      </div>
    </div>
  );
}
