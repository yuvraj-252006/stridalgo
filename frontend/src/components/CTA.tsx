import "../styles/cta.css";

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-card">
          <div className="cta-glow"></div>

          <h2>Ready to Build Your Kingdom?</h2>

          <p>
            Master algorithms, defeat legendary bosses, compete in tournaments,
            and rise through the Hall of Legends.
          </p>

          <div className="cta-buttons">
            <button className="primary-btn">
              Start Your Journey
            </button>

            <button className="secondary-btn">
              Explore Challenges
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;