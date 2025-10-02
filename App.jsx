import React, { useState, useEffect } from "react";
import "./App.css";

// Online pictures of Tanzania schools
const galleryImages = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Mwenge_School_Tanzania.jpg",
    caption: "Shule ya Mwenge High School"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dar-es-salaam_School.jpg",
    caption: "Darasa lenye wanafunzi"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Tanzania_Sports_Field.jpg",
    caption: "Shule inajivunia michezo"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/68/Tanzania_library.jpg",
    caption: "Maktaba yenye rasilimali"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Tanzania_School_Building.jpg",
    caption: "Jengo la shule"
  }
];

function App() {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:grbt072@gmail.com?subject=Message from ${formData.name}&body=${formData.message} (${formData.email})`;
  };

  const prevSlide = () => setCurrent((current - 1 + galleryImages.length) % galleryImages.length);
  const nextSlide = () => setCurrent((current + 1) % galleryImages.length);

  return (
    <div>
      {/* Header */}
      <header style={headerStyle}>
        <h1>Mwenge High School</h1>
        <nav>
          <ul style={navStyle}>
            <li><a href="#about" style={linkStyle}>Kuhusu</a></li>
            <li><a href="#gallery" style={linkStyle}>Picha</a></li>
            <li><a href="#contact" style={linkStyle}>Wasiliana</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section style={heroStyle}>
        <div style={heroOverlay}>
          <h1>Karibu Mwenge High School</h1>
          <p>Elimu Bora, Michezo, na Maendeleo ya Vipaji</p>
        </div>
      </section>

      {/* About */}
      <section style={sectionStyle} id="about">
        <h2>Kuhusu Shule Yetu</h2>
        <div style={cardsStyle}>
          <div style={cardStyle}>
            <h3>Historia</h3>
            <p>Shule yetu ina historia ndefu ya mafanikio na ubora wa elimu.</p>
          </div>
          <div style={cardStyle}>
            <h3>Elimu</h3>
            <p>Tunaangazia maendeleo ya kisaikolojia na kielimu ya wanafunzi wetu.</p>
          </div>
          <div style={cardStyle}>
            <h3>Shughuli za Michezo</h3>
            <p>Wanafunzi wanashiriki katika michezo na mashindano ya kitaifa.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={sectionStyle} id="gallery">
        <h2>Picha za Shule</h2>
        <div style={sliderWrapperStyle}>
          <button style={arrowStyle} onClick={prevSlide}>&lt;</button>
          <div style={sliderContainerStyle}>
            <img
              src={galleryImages[current].src}
              alt={galleryImages[current].caption}
              style={sliderImgStyle}
            />
            <p style={captionStyle}>{galleryImages[current].caption}</p>
          </div>
          <button style={arrowStyle} onClick={nextSlide}>&gt;</button>
        </div>
        <div style={dotsStyle}>
          {galleryImages.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              style={{
                ...dotStyle,
                backgroundColor: current === index ? "#1e3a8a" : "#bbb"
              }}
            ></span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={sectionStyle} id="contact">
        <h2>Wasiliana Nasi</h2>
        <form style={formStyle} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Jina Lako"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Barua Pepe Yako"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Andika ujumbe wako hapa"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Tuma Ujumbe</button>
        </form>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        Imeundwa na Goodluck Robert na Chawa Alex | Wanafunzi wa PMCs, Mwenge High School
      </footer>
    </div>
  );
}

// Styles
const headerStyle = {
  background: "#1e3a8a",
  color: "white",
  padding: "20px 0",
  textAlign: "center",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
};

const navStyle = {
  display: "flex",
  justifyContent: "center",
  listStyle: "none",
  gap: "30px",
  marginTop: "10px"
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

const heroStyle = {
  backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/3/3f/Mwenge_School_Tanzania.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "500px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const heroOverlay = {
  backgroundColor: "rgba(0,0,0,0.5)",
  color: "white",
  padding: "50px",
  textAlign: "center",
  borderRadius: "15px"
};

const sectionStyle = {
  padding: "60px 20px",
  maxWidth: "1200px",
  margin: "auto"
};

const cardsStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "20px"
};

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  transition: "transform 0.3s",
  cursor: "pointer",
  textAlign: "center"
};

const sliderWrapperStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  flexWrap: "wrap",
  marginTop: "20px"
};

const sliderContainerStyle = {
  maxWidth: "700px",
  textAlign: "center"
};

const sliderImgStyle = {
  width: "100%",
  maxHeight: "400px",
  objectFit: "cover",
  borderRadius: "15px",
  transition: "all 0.5s ease-in-out"
};

const captionStyle = {
  marginTop: "10px",
  fontWeight: "bold",
  color: "#1e3a8a"
};

const arrowStyle = {
  fontSize: "2rem",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "#1e3a8a"
};

const dotsStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
  gap: "8px"
};

const dotStyle = {
  width: "15px",
  height: "15px",
  borderRadius: "50%",
  display: "inline-block",
  cursor: "pointer"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  maxWidth: "500px",
  margin: "20px auto"
};

const footerStyle = {
  background: "#1e3a8a",
  color: "white",
  textAlign: "center",
  padding: "20px 10px",
  marginTop: "40px"
};

export default App;
