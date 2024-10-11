<<<<<<< HEAD
// import React, { useState } from "react";
// import Navbar from '../components/common/Navbar';

// import Footer from "../components/common/Footer";

// export default function Profile() {

  
//   const player = {
//     name: "Alex Johnson",
//     image: "/placeholder.svg?height=200&width=200",
//     team: "Nexus Guardians",
//     achievements: [
//       "2023 World Championship Winner",
//       "5x Tournament MVP",
//       "3x All-Star Player",
//     ],
//     recentEvents: [
//       {
//         name: "Global Esports Masters 2023",
//         game: "Overwatch",
//         placement: "1st",
//         prize: "$100,000",
//       },
//       {
//         name: "Cyber League Season 5",
//         game: "CS:GO",
//         placement: "3rd",
//         prize: "$25,000",
//       },
//       {
//         name: "Valorant Champions Tour 2023",
//         game: "Valorant",
//         placement: "2nd",
//         prize: "$50,000",
//       },
//     ],
//     careerStats: {
//       Overwatch: [
//         {
//           event: "Global Esports Masters 2023",
//           kills: 245,
//           deaths: 76,
//           kd: 3.22,
//         },
//         { event: "Overwatch League 2023", kills: 1250, deaths: 450, kd: 2.78 },
//         { event: "World Cyber Games 2022", kills: 189, deaths: 62, kd: 3.05 },
//       ],
//       "CS:GO": [
//         { event: "Cyber League Season 5", kills: 187, deaths: 102, kd: 1.83 },
//         {
//           event: "ESL Pro League Season 17",
//           kills: 412,
//           deaths: 298,
//           kd: 1.38,
//         },
//         {
//           event: "BLAST Premier: World Final 2022",
//           kills: 156,
//           deaths: 89,
//           kd: 1.75,
//         },
//       ],
//       Valorant: [
//         {
//           event: "Valorant Champions Tour 2023",
//           kills: 231,
//           deaths: 112,
//           kd: 2.06,
//         },
//         { event: "VCT Masters Tokyo", kills: 178, deaths: 95, kd: 1.87 },
//         { event: "Red Bull Home Ground", kills: 145, deaths: 78, kd: 1.86 },
//       ],
//     },
//   };
//   const [activeGame, setActiveGame] = useState(
//     Object.keys(player.careerStats)[0]
//   );

//   return (
//     <div>
//       <Navbar/>
//       <div className="bg-backscreen w-auto">
//         <div className="w-[1000px] mx-auto px-6 py-3 space-y-3 bg-backscreen">
//           {/* Grid layout for profile and achievements */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Left: Player Profile */}
//             <div className="flex items-center gap-10 justify-center">
//               <img
//                 src="/Profilepic.png"
//                 alt={player.name}
//                 width={200}
//                 height={200}
//                 className="rounded-full mb-4 ml-4"
//               />
//               <div className="flex-col">
//                 <h1 className="text-3xl text-line font-bold text-center mb-6">
//                   {player.name}
//                 </h1>
//                 <div>
//                   <p className="text-xl text-line mb-4">
//                     Professional Esports Player
//                   </p>
//                   <p className="text-lg text-line  ">Team: {player.team}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Right: Achievements */}
//             <div className="bg-newgray shadow rounded-lg px-6 py-3">
//               <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-line">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
//                   <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
//                   <path d="M4 22h16"></path>
//                   <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
//                   <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
//                   <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
//                 </svg>
//                 Major Achievements
//               </h2>
//               <div className="flex flex-wrap gap-2">
//                 {player.achievements.map((achievement, index) => (
//                   <span
//                     key={index}
//                     className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded"
//                   >
//                     {achievement}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Bottom: Recent Events and Career Stats */}
//           <div className="space-y-3">
//             {/* Recent Events */}
//             <div className="bg-newgray shadow rounded-lg px-6 py-3 text-line">
//               <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M8.21 13.89 7 23l-5-1 9.2-9.2-3-10.8 3 10.8zM15 9l-1.5-5.5L9 2l3.5 7H15zm1 0 3.5-7L16 0l-1.5 5.5L16 9z"></path>
//                 </svg>
//                 Recent Events
//               </h2>
//               <div className="overflow-x-auto rounded-lg">
//                 <table className="w-full text-sm text-left text-white">
//                   <thead className="text-xs   uppercase text-backscreen bg-gray-100">
//                     <tr>
//                       <th scope="col" className="px-6 py-3">
//                         Event
//                       </th>
//                       <th scope="col" className="px-6 py-3">
//                         Game
//                       </th>
//                       <th scope="col" className="px-6 py-3">
//                         Placement
//                       </th>
//                       <th scope="col" className="px-6 py-3">
//                         Prize
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {player.recentEvents.map((event, index) => (
//                       <tr key={index} className="bg-shade border-b">
//                         <td className="px-6 py-3">{event.name}</td>
//                         <td className="px-6 py-3">{event.game}</td>
//                         <td className="px-6 py-3">{event.placement}</td>
//                         <td className="px-6 py-3">{event.prize}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Career Stats */}
//             <div className="bg-newgray shadow rounded-lg px-6 py-3 text-line">
//               <div className="mb-4">
//                 <div className="flex border-b">
//                   {Object.keys(player.careerStats).map((game, index) => (
//                     <button
//                       key={index}
//                       className={`px-4 py-2 text-sm font-medium text-line hover:text-red-300 focus:outline-none ${
//                         activeGame === game ? "border-b-2 border-red-300" : ""
//                       }`}
//                       onClick={() => setActiveGame(game)} // Update active game on click
//                     >
//                       {game}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Display Stats for the Active Game */}
//               <div>
//                 <div className="overflow-x-auto rounded-lg">
//                   <table className="w-full text-sm text-left text-white">
//                     <thead className="text-xs uppercase text-backscreen bg-gray-100">
//                       <tr>
//                         <th scope="col" className="px-6 py-3">
//                           Event
//                         </th>
//                         <th scope="col" className="px-6 py-3">
//                           Kills
//                         </th>
//                         <th scope="col" className="px-6 py-3">
//                           Deaths
//                         </th>
//                         <th scope="col" className="px-6 py-3">
//                           K/D Ratio
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {player.careerStats[activeGame].map((event, index) => (
//                         <tr key={index} className="bg-shade border-b">
//                           <td className="px-6 py-3">{event.event}</td>
//                           <td className="px-6 py-3">{event.kills}</td>
//                           <td className="px-6 py-3">{event.deaths}</td>
//                           <td className="px-6 py-3">{event.kd.toFixed(2)}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [team, setTeam] = useState(null);
  
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/profile/getTeam/${userId}`);
        const { success, user, teamCreated } = response.data;

        if (success) {
          setProfile(user);
          setTeam(teamCreated);
        } else {
          console.error('Failed to fetch profile');
        }
      } catch (err) {
        console.error('Error fetching profile:', err);
      }
    };

    fetchProfile();
    
    

  }, [userId]);
=======
import React, { useState } from "react";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";


export default function Profile() {
  const player = {
    name: "Alex Johnson",
    image: "/placeholder.svg?height=200&width=200",
    team: "Nexus Guardians",
    achievements: [
      "2023 World Championship Winner",
      "5x Tournament MVP",
      "3x All-Star Player",
    ],
    recentEvents: [
      {
        name: "Global Esports Masters 2023",
        game: "Overwatch",
        placement: "1st",
        prize: "$100,000",
      },
      {
        name: "Cyber League Season 5",
        game: "CS:GO",
        placement: "3rd",
        prize: "$25,000",
      },
      {
        name: "Valorant Champions Tour 2023",
        game: "Valorant",
        placement: "2nd",
        prize: "$50,000",
      },
    ],
    careerStats: {
      Overwatch: [
        {
          event: "Global Esports Masters 2023",
          kills: 245,
          deaths: 76,
          kd: 3.22,
        },
        { event: "Overwatch League 2023", kills: 1250, deaths: 450, kd: 2.78 },
        { event: "World Cyber Games 2022", kills: 189, deaths: 62, kd: 3.05 },
      ],
      "CS:GO": [
        { event: "Cyber League Season 5", kills: 187, deaths: 102, kd: 1.83 },
        {
          event: "ESL Pro League Season 17",
          kills: 412,
          deaths: 298,
          kd: 1.38,
        },
        {
          event: "BLAST Premier: World Final 2022",
          kills: 156,
          deaths: 89,
          kd: 1.75,
        },
      ],
      Valorant: [
        {
          event: "Valorant Champions Tour 2023",
          kills: 231,
          deaths: 112,
          kd: 2.06,
        },
        { event: "VCT Masters Tokyo", kills: 178, deaths: 95, kd: 1.87 },
        { event: "Red Bull Home Ground", kills: 145, deaths: 78, kd: 1.86 },
      ],
    },
  };
  const [activeGame, setActiveGame] = useState(
    Object.keys(player.careerStats)[0]
  );
>>>>>>> 568ecf7561fd870ef672c13b156a78db7978a634

  return (
    <div className="profile-container">
      {profile ? (
        <div>
          <h2>{profile.Username}'s Profile</h2>
          {/* Render additional user information here */}
          {team ? (
            <div>
              <h3>Team Created:</h3>
              <p>Team Name: {team.teamName}</p>
              {/* Render other team details here */}
            </div>
          ) : (
            <p>No team created.</p> // Display a message if no team exists
          )}
        </div>
      ) : (
        <p>Loading profile...</p> // Optionally show a loading state
      )}
      <div>
        <h2>User Profile</h2>
        {profile && (
            <div>
                <h3>{profile.Username}'s Team</h3>
                {team && team.members ? (
                    <div>
                        <h4>Team Members:</h4>
                        <ul>
                            {team.members.map(member => (
                                <li key={member._id}>{member.username}</li> // Display username
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>No team members available.</p>
                )}
            </div>
        )}
    </div>
    </div>
  );
};

export default Profile;
