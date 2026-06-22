import "../styles/leaderboard.css";

function LeaderboardPreview() {
  const players = [
    {
      rank: "👑",
      name: "Alex",
      xp: "25,600 XP",
      kingdom: "Legendary Empire",
      className: "gold",
    },
    {
      rank: "🥈",
      name: "Sarah",
      xp: "22,100 XP",
      kingdom: "Kingdom",
      className: "silver",
    },
    {
      rank: "🥉",
      name: "John",
      xp: "19,400 XP",
      kingdom: "Architect",
      className: "bronze",
    },
    {
      rank: "4",
      name: "Emma",
      xp: "17,800 XP",
      kingdom: "Explorer",
      className: "",
    },
    {
      rank: "?",
      name: "You?",
      xp: "???",
      kingdom: "Start Your Journey",
      className: "you",
    },
  ];

  return (
    <section className="leaderboard">
      <div className="container">
        <div className="section-heading">
          <h2>Hall of Legends</h2>

          <p>
            Climb the rankings, earn glory and become the ruler of algorithms.
          </p>
        </div>

        <div className="leaderboard-card">
          {players.map((player, index) => (
            <div
              key={index}
              className={`leader-row ${player.className}`}
            >
              <div className="leader-rank">
                {player.rank}
              </div>

              <div className="leader-name">
                {player.name}
              </div>

              <div className="leader-xp">
                {player.xp}
              </div>

              <div className="leader-kingdom">
                {player.kingdom}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeaderboardPreview;