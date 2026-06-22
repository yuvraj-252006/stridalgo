import "../styles/stats.css";

function Stats() {
  const stats = [
    {
      icon: "🧩",
      number: "10K+",
      label: "Problems Solved",
    },
    {
      icon: "⚔️",
      number: "5K+",
      label: "Active Players",
    },
    {
      icon: "👹",
      number: "250+",
      label: "Bosses Defeated",
    },
    {
      icon: "🏆",
      number: "100+",
      label: "Tournaments Hosted",
    },
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="section-heading">
          <h2>The Kingdom in Numbers</h2>

          <p>
            Thousands of players are already building their empires and
            mastering algorithms.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">
                {stat.icon}
              </div>

              <h3>{stat.number}</h3>

              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;