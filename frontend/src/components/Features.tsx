import "../styles/features.css";

function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-heading">
          <h2>Why StridAlgo?</h2>

          <p>
            More than coding practice.
            Build your kingdom while
            mastering algorithms.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚔️</div>

            <h3>Solve Challenges</h3>

            <p>
              Practice random DSA questions across
              Easy, Medium and Hard difficulties.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏙️</div>

            <h3>Build Your City</h3>

            <p>
              Every solved problem adds new floors
              and expands your kingdom.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏆</div>

            <h3>Earn Rewards</h3>

            <p>
              Gain XP, coins, medals and unlock
              achievements.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌍</div>

            <h3>Compete Globally</h3>

            <p>
              Join tournaments, climb leaderboards
              and become legendary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;