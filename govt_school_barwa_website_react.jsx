export default function SchoolWebsite() {
  return (
    <div>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
          scroll-behavior: smooth;
        }

        body {
          background-color: #f5f9ff;
          color: #222;
          line-height: 1.6;
        }

        header {
          background-color: #003b8e;
          color: white;
          text-align: center;
          padding: 20px;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        header h1 {
          margin-bottom: 8px;
        }

        nav {
          margin-top: 12px;
        }

        nav a {
          color: white;
          text-decoration: none;
          margin: 0 12px;
          font-size: 18px;
          font-weight: bold;
        }

        nav a:hover {
          color: #ffd700;
        }

        .hero {
          background-image: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop');
          background-position: center;
          background-size: cover;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 20px;
        }

        .hero-content {
          max-width: 900px;
        }

        .hero h1 {
          font-size: 52px;
          margin-bottom: 20px;
        }

        .hero p {
          font-size: 22px;
          margin-bottom: 30px;
        }

        .btn {
          display: inline-block;
          background-color: #ffd700;
          color: black;
          text-decoration: none;
          padding: 14px 28px;
          border-radius: 10px;
          font-weight: bold;
        }

        section {
          padding: 70px 20px;
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        h2 {
          text-align: center;
          margin-bottom: 40px;
          color: #003b8e;
          font-size: 40px;
        }

        .about {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          align-items: center;
        }

        .about img {
          width: 100%;
          max-width: 500px;
          border-radius: 20px;
        }

        .about-text {
          flex: 1;
          font-size: 18px;
        }

        .about-text p {
          margin-bottom: 18px;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .card {
          background-color: white;
          padding: 30px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .card h3 {
          color: #003b8e;
          margin-bottom: 15px;
          font-size: 24px;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .gallery img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 15px;
        }

        .contact {
          background-color: #003b8e;
          color: white;
          text-align: center;
        }

        .contact h2 {
          color: white;
        }

        .contact p {
          margin-bottom: 12px;
          font-size: 18px;
        }

        footer {
          background-color: black;
          color: #ccc;
          text-align: center;
          padding: 20px;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 36px;
          }

          .hero p {
            font-size: 18px;
          }

          nav a {
            display: inline-block;
            margin: 8px;
            font-size: 16px;
          }
        }
      `}</style>

      <header>
        <h1>Govt. Sr. Sec. School Barwa</h1>
        <p>Bhiwani, Haryana, India</p>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#school-info">School Info</a>
          <a href="#facilities">Facilities</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Welcome to Govt. Sr. Sec. School Barwa</h1>
          <p>Quality Education for a Bright Future</p>
          <a href="#about" className="btn">Learn More</a>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2>About GSSS BARWA</h2>

          <div className="about">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
              alt="School Building"
            />

            <div className="about-text">
              <p><strong>GSSS BARWA</strong> was established in 1895 and is managed by the Department of Education.</p>

              <p>The school is located in the urban area of Siwani Block in Bhiwani district, Haryana.</p>

              <p>It provides education from Classes 6 to 12 and follows both English and Hindi medium instruction.</p>

              <p>The academic session starts in April and the school is accessible by all-weather roads.</p>

              <p>The campus includes classrooms, library, computer lab, language lab, playground, drinking water, electricity, toilets, and mid-day meal facilities.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="results">
        <div className="container">
          <h2>School Achievements</h2>

          <div className="cards">
            <div className="card">
              <h3>🏆 Board Results</h3>
              <p>Excellent Senior Secondary examination results with strong academic performance.</p>
            </div>

            <div className="card">
              <h3>🔬 Science Activities</h3>
              <p>Students actively participate in science experiments and educational activities.</p>
            </div>

            <div className="card">
              <h3>👨‍🎓 Student Development</h3>
              <p>Focus on discipline, knowledge, communication skills, and overall growth.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="facilities">
        <div className="container">
          <h2>Facilities</h2>

          <div className="cards">
            <div className="card">
              <h3>💻 Computer Lab</h3>
              <p>Modern computer lab with 20 + 20 functional computers for digital learning.</p>
            </div>

            <div className="card">
              <h3>🗣️ Language Lab</h3>
              <p>English and Hindi language lab for communication and speaking skill development.</p>
            </div>

            <div className="card">
              <h3>🌐 Medium</h3>
              <p>English and Hindi Medium Education Available.</p>
            </div>

            <div className="card">
              <h3>👨‍🏫 Smart Teaching</h3>
              <p>Experienced teachers with modern digital learning methods.</p>
            </div>

            <div className="card">
              <h3>📚 Library</h3>
              <p>Educational books and study materials for students.</p>
            </div>

            <div className="card">
              <h3>⚽ Sports Ground</h3>
              <p>Large playground for sports and physical fitness activities.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery">
        <div className="container">
          <h2>School Gallery</h2>

          <div className="gallery">
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop"
              alt="School Assembly"
            />

            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop"
              alt="Science Activity"
            />

            <img
              src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1200&auto=format&fit=crop"
              alt="School Result Board"
            />
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <h2>Contact Us</h2>

          <p>📍 Barwa, Bhiwani, Haryana, India</p>
          <p>📞 +91 XXXXX XXXXX</p>
          <p>✉️ gsssbarwa@gmail.com</p>
        </div>
      </section>

      <footer>
        <p>© 2026 Govt. Sr. Sec. School Barwa (Bhiwani). All Rights Reserved.</p>
      </footer>
    </div>
  );
}
