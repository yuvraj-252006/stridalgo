import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">

        {/* Left Side */}
        <div className="hero-left">
          <span className="hero-badge">
            🏙️ Build Your Algorithmic Kingdom
          </span>

          <h1>
            Every stride in algorithms
            builds your city higher.
          </h1>

          <p>
            Solve coding challenges, earn rewards, and watch your
            city grow from a single building into an entire kingdom.
          </p>

          <div className="hero-quotes">
            <p>Every problem expands your kingdom.</p>
            <p>Every solution raises your skyline.</p>
          </div>

          <div className="hero-buttons">
            <button className="hero-primary">
              Start Building Your City
            </button>

            <button className="hero-secondary">
              Explore Challenges
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <h3>Easy</h3>
              <p>Begin Your Journey</p>
            </div>

            <div>
              <h3>Medium</h3>
              <p>Grow Your Kingdom</p>
            </div>

            <div>
              <h3>Hard</h3>
              <p>Become Legendary</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-right">

          {/* Clouds */}
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>

          {/* Stars */}
          <div className="stars">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* City Buildings */}
          <div className="city-preview">

            <div className="building tall">
              <div className="windows"></div>
            </div>

            <div className="building medium">
              <div className="windows"></div>
            </div>

            <div className="building small">
              <div className="windows"></div>
            </div>

            <div className="building medium">
              <div className="windows"></div>
            </div>

            <div className="building tall">
              <div className="windows"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;