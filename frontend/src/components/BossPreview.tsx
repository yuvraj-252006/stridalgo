import "../styles/boss.css";

function BossPreview() {
  return (
    <section className="boss">
      <div className="container">

        <div className="section-heading">
          <h2>Weekly Boss Battles</h2>

          <p>
            Face legendary enemies and earn exclusive rewards.
          </p>
        </div>

        <div className="boss-card">

          <div className="boss-image">
            👹
          </div>

          <div className="boss-content">
            <span className="difficulty">
              Medium Difficulty
            </span>

            <h3>
              Dragon of Recursion
            </h3>

            <p>
              The dragon feeds on infinite loops.
              Defeat it by mastering recursion and
              protect your kingdom.
            </p>

            <div className="rewards">
              <div>🏆 500 XP</div>
              <div>🪙 100 Coins</div>
              <div>🎁 Legendary Chest</div>
            </div>

            <button className="boss-btn">
              Challenge Boss
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default BossPreview;