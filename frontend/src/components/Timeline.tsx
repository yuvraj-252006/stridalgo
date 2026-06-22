import "../styles/timeline.css";

const steps = [
  {
    title: "Solve a Problem",
    desc: "Pick a challenge that matches your level and write your solution."
  },
  {
    title: "Earn XP",
    desc: "Correct, efficient solutions earn more XP, coins and medals."
  },
  {
    title: "Build Structures",
    desc: "XP converts into floors, buildings and new districts in your city."
  },
  {
    title: "Expand Kingdom",
    desc: "Unlock new building types as your skyline and your skill set grow."
  },
  {
    title: "Become Legendary",
    desc: "Top tournaments, defeat boss battles and rule the global leaderboard."
  }
];

function Timeline() {
  return (
    <section className="timeline">
      <div className="container">

        <div className="section-heading">
          <h2>How it works</h2>

          <p>
            One simple cycle, repeated until your kingdom is legendary.
          </p>
        </div>

        <div className="timeline-wrapper">
          {steps.map((step, index) => (
            <div
              className="timeline-step"
              key={index}
            >
              <div className="timeline-number">
                {index + 1}
              </div>

              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Timeline;