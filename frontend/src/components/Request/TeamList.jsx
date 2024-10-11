import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TeamCard from './TeamCard';

const TeamsList = () => {
  const [teams, setTeams] = useState([]);
  
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get('http://localhost:5000/request/getTeams', {
          params: { userId },
        });
        
        const {success,message}=response.data
        if (success) {
          setTeams(response.data.teams);
        } else {
          console.error(message); // Log any error message from the response
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Available Teams</h2>
      {teams.map((team) => (
        <TeamCard key={team._id} team={team} />
      ))}
    </div>
  );
};

export default TeamsList;
