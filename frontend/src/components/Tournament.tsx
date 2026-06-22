import "../styles/tournament.css";

function Tournament() {
  return (
    <section className="tournament">
      <div className="container">
        <div className="section-heading">
          <h2>Weekly Kingdom Tournament</h2>

          <p>
            Compete against coders worldwide and earn exclusive rewards.
          </p>
        </div>

        <div className="tournament-card">
          {/* Left Side */}
          <div className="tournament-visual">
            <div className="trophy">🏆</div>

            <h3>Season VII Championship</h3>

            <span className="tournament-status">
              Registration Open
            </span>
          </div>

          {/* Right Side */}
          <div className="tournament-content">
            <h4>Starts In</h4>

            <div className="countdown">
              <div className="time-card">
                <span>02</span>
                <p>Days</p>
              </div>

              <div className="time-card">
                <span>14</span>
                <p>Hours</p>
              </div>

              <div className="time-card">
                <span>32</span>
                <p>Minutes</p>
              </div>
            </div>

            <h4>Rewards</h4>

            <div className="rewards">
              <div>🥇 2000 XP</div>
              <div>🪙 500 Coins</div>
              <div>🏰 Castle Skin</div>
            </div>

            <button className="join-btn">
              Join Tournament
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tournament;