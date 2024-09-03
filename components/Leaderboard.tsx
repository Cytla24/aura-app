"use client";

import { useState, useEffect } from 'react';

interface LeaderboardEntry {
  id: number;
  username: string;
  score: number;
}

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    // Here you would fetch the leaderboard data from your API
    // For now, we'll use placeholder data
    const placeholderData: LeaderboardEntry[] = [
      { id: 1, username: "StyleMaster", score: 9.8 },
      { id: 2, username: "FashionGuru", score: 9.5 },
      { id: 3, username: "TrendSetter", score: 9.2 },
      // ... add more entries
    ];
    setLeaderboard(placeholderData);
  }, []);

  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Aura Score Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Aura Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={entry.id}>
                <td>{index + 1}</td>
                <td>{entry.username}</td>
                <td>{entry.score.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Leaderboard;