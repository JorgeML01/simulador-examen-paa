import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const LeaderboardPAA = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://ill-red-giraffe-tux.cyclic.cloud/PAA"
        );
        const data = response.data;
        setLeaderboard(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="leaderboard-container">
      <h1 id="leaderboard-header">Clasificación - PAA</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>User ID</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={user.id_user}>
              <td className="rank-number">{index + 1}</td>
              <td className="user-id">{user.name}</td>
              <td className="user-id">{user.id_user}</td>
              <td className="score">{user.highest_score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardPAA;
