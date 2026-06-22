import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h2>StridAlgo</h2>

            <p>
              Build your kingdom, master algorithms, defeat bosses,
              and become a legend in the Hall of Fame.
            </p>
          </div>

          {/* Product */}
          <div className="footer-column">
            <h3>Product</h3>

            <a href="#">Features</a>
            <a href="#">Boss Battles</a>
            <a href="#">Tournaments</a>
            <a href="#">Leaderboards</a>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <h3>Resources</h3>

            <a href="#">Challenges</a>
            <a href="#">Roadmaps</a>
            <a href="#">Blog</a>
            <a href="#">FAQ</a>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h3>Company</h3>

            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-socials">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Discord</a>
            <a href="#">X</a>
          </div>

          <p>
            © 2026 StridAlgo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;