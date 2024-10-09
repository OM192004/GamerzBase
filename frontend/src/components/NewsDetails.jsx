import React from "react";

export default function NewsDetails() {
  // Hardcoded event data
  const eventData = {
    coverImage: "/eventdetails.png",
    title: "VALORANT Game Changers EMEA Updates: Stage 3 Finals Venue and New Mixed Tournament Revealed! ",
    description: "",
    publishDate: "October 1, 2024",
    location: "New York City, USA",
    overview: `The GamerzBase Championship 2024 is set to be the ultimate showdown, 
               featuring top teams competing across multiple games for esports glory. 
               This year's event will offer intense matches, new formats, and exciting 
               fan experiences for both attendees and online viewers.`,
    participatingTeamsIntro: `GamerzBase is proud to bring together 16 of the most elite teams from around the world. 
                              These competitors will battle through a thrilling series of matches, all fighting 
                              for a share of the grand prize and the title of Champion.`,
    qualifiedTeamsImage: "/gamerzbase-qualified-teams.jpg",
    scheduleAndFormat: `The event kicks off on November 5th, 2024, and will run until the Grand Finals on November 19th. 
                        Teams will compete in a double-elimination bracket, with each match played in a best-of-three format. 
                        The Grand Finals will feature a best-of-five series to determine the ultimate winner.`,
    howToWatch: `Catch all the action live on the official GamerzBase Twitch and YouTube channels. 
                 Fans can also enjoy exclusive behind-the-scenes content, live commentary, and post-match interviews.`,
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Event Cover Image */}
      <div className="relative mx-36">
        <img
          src={eventData.coverImage} // Static image path from the hardcoded data
          alt="Event Cover"
          className="w-full object-cover"
        />
        <div className=" inset-0 bg-black opacity-50"></div>
      </div>

      {/* Event Content Section */}
      <div className="container mx-auto px-10 md:px-20 lg:px-36 pt-4">
        <div className="mb-6">
          <h1 className="text-5xl font-bold pt-4">
            {eventData.title} {/* Title from the hardcoded data */}
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Published: {eventData.publishDate} | Location: {eventData.location}
          </p>
        </div>

        <h2 className="text-3xl font-semibold mb-4">OVERVIEW OF THE EVENT</h2>
        <p className="text-gray-300 mb-6">{eventData.overview}</p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">PARTICIPATING TEAMS</h3>
        <p className="text-gray-300 mb-4">{eventData.participatingTeamsIntro}</p>
        <img
          src={eventData.qualifiedTeamsImage} // Static image path from the hardcoded data
          alt="Qualified Teams"
          className="w-full md:w-5/6 lg:w-4/6 object-cover p-5 mx-auto"
        />

        <h3 className="text-2xl font-semibold mt-8 mb-4">SCHEDULE & FORMAT</h3>
        <p className="text-gray-300 mb-4">{eventData.scheduleAndFormat}</p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">HOW TO WATCH</h3>
        <p className="text-gray-300 mb-4">{eventData.howToWatch}</p>
      </div>
    </div>
  );
}
