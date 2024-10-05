import React from "react";

export default function EventDetails() {
  // Hardcoded event data
  const eventData = {
    coverImage: "/eventdetails.png",
    title: "Everything you need to know : Masters Shanghai",
    description: "",
    publishDate: "24 July 2024",
    location: "Shanghai, China",
    overview: `The Valorant Masters: Shanghai is the latest edition in the series, 
               bringing top teams from around the world to battle it out for ultimate supremacy. 
               This year's event promises to be the biggest yet, with a new format and plenty of 
               exciting match-ups to look forward to.`,
    participatingTeamsIntro: `Welcome to Masters Shanghai! The stakes? Sky-high! The competition? Fiercer than ever! 
                              12 top-tier teams from around the globe, clashing in a contest of strategy, skill, and sheer willpower!`,
    qualifiedTeamsImage: "/qualifiedteams.png",
    scheduleAndFormat: `The event will take place over the course of two weeks, starting on August 15th, 2024, 
                        and culminating in the Grand Finals on August 30th. Teams will face off in a double-elimination bracket, 
                        with matches played in a best-of-five format.`,
    howToWatch: `All matches will be streamed live on the official Valorant Twitch and YouTube channels. 
                 Be sure to tune in for live commentary, behind-the-scenes content, and much more.`,
  };

  return (
    <div className="bg-card text-white min-h-screen">
      {/* Event Cover Image */}
      <div className="relative mx-36">
        <img
          src={eventData.coverImage} // Static image path from the hardcoded data
          alt="Event Cover"
          className="w-full object-cover"
        />
        <div className="inset-0 bg-card opacity-50"></div>
      </div>

      {/* Event Content Section */}
      <div className="container mx-auto px-52 pt-4">
        <div className="bottom-10 left-10">
          <h1 className="text-6xl font-bold pt-4">
            {eventData.title} {/* Title from the hardcoded data */}
          </h1>
          <p className="text-lg mt-2">{eventData.description}</p>
        </div>

        <div className="text-gray-400 text-sm mb-4">
          <p>Published: {eventData.publishDate}</p>
          <p>Location: {eventData.location}</p>
        </div>

        <h2 className="text-3xl font-semibold mb-6">OVERVIEW OF THE EVENT</h2>
        <p className="text-gray-300 mb-4">{eventData.overview}</p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">PARTICIPATING TEAMS</h3>
        <p className="text-gray-300 mb-4">{eventData.participatingTeamsIntro}</p>
        <img
          src={eventData.qualifiedTeamsImage} // Static image path from the hardcoded data
          alt="Qualified Teams"
          className="w-4/6 object-cover p-5 mx-auto"
        />

        <h3 className="text-2xl font-semibold mt-8 mb-4">SCHEDULE & FORMAT</h3>
        <p className="text-gray-300 mb-4">{eventData.scheduleAndFormat}</p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">HOW TO WATCH</h3>
        <p className="text-gray-300 mb-4">{eventData.howToWatch}</p>
      </div>
    </div>
  );
}
