import React, { useState, useEffect } from "react";
import axios from "axios";

function LeaderboardTable() {
  const [leaderboard, setLeaderboard] = useState([]);

  const fetchLeaderboard = async () => {
    try {
      const response = await axios.get(
        "https://ill-red-giraffe-tux.cyclic.cloud/PAM"
      );
      const data = response.data;
      setLeaderboard(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      {leaderboard.map((user) => (
        <div key={user.id_user}>
          <p>
            id_user: {user.id_user} - Name: {user.name} - Score:
            {user.highest_score}
          </p>
        </div>
      ))}
    </div>
  );
}

export default LeaderboardTable;
