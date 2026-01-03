import "./HomePage.css";
import { useState } from "react";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";


export default function Home(){

 
    
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  // 🔹 input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields!");
      return;
    }

   alert("⚠️ Backend not connected. This is for demo purposes only!");

    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSuccess(""), 3000);
  };
  return(
    <div className="home-container">
     {/* 🏠 Intro Section */}
      <section className="intro-section">
        <h1>Hi, I'm <span>Vikram Kumar</span> 👋</h1>

        <p> I’m a fresher passionate about software development, learning and building modern web applications using HTML, CSS, React, Laravel, MySQL, Java, and C#.</p>
                               
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/vikram-kumar-824037301"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn linkedin"
          >
            <FaLinkedin /> LinkedIn
          </a>

        
          

           <div className="cv-button">
          <a
            href="/Vikram_Frontend.pdf" // 👈 put your actual CV file in public folder
            download
              target="_blank"
             rel="noopener noreferrer"
            className="download-btn"
          >
            📄 Download CV
          </a>
        </div>
        </div>
      </section>
    
    <section className="about-section" id="about">
   <h2 className="section-title">👨‍💻 About Me</h2>
  <p className="section-subtitle">A little about who I am and what I do</p>

  <div className="about-content">
    <p>
      Hello! I'm <strong>Vikram Kumar</strong>, I’m a BCA graduate with a passion for building clean, user-friendly web applications. 
      I enjoy working with<strong> HTML, CSS, React, Laravel, SQL, Java, and C#</strong>, and I love solving problems through code. 
      I’m always exploring new technologies and improving my skills to create meaningful digital experiences. 
      I enjoy turning creative ideas into responsive and functional websites.
               
    </p>

    <p>
      My core skills include <strong>HTML</strong>, <strong>CSS</strong>, 
      <strong>JavaScript</strong>, <strong>React</strong>, and <strong>Java</strong>,
      <strong>Laravel</strong> and <strong>MySQL</strong>.
      I focus on writing code that’s both efficient and easy to maintain.
    </p>

    <p>
      When I’m not coding, I enjoy exploring new technologies and improving my problem-solving 
      skills to stay ahead in the ever-evolving web world.
    </p>
  </div>
</section>


<section id="skills" class="skills-section">
  <h2 class="section-title">💡 My Skills</h2>
  <p class="section-subtitle">Technologies I work with to build modern web projects</p>

  <div class="skills-container">
    <div class="skill-card">
      <i class="devicon-html5-plain colored"></i>
      <h3>HTML</h3>
    </div>

    <div class="skill-card">
      <i class="devicon-css3-plain colored"></i>
      <h3>CSS</h3>
    </div>

    <div class="skill-card">
      <i class="devicon-javascript-plain colored"></i>
      <h3>JavaScript</h3>
    </div>

    <div class="skill-card">
      <i class="devicon-react-original colored"></i>
      <h3>React</h3>
    </div>

    <div class="skill-card">
      <i class="devicon-java-plain colored"></i>
      <h3>Java</h3>
    </div>

    

    <div class="skill-card">
      <i class="devicon-laravel-plain colored"></i>
      <h3>Laravel</h3>
    </div>

    <div class="skill-card">
      <i class="devicon-java-plain colored"></i>
      <h3>MySQL</h3>
    </div>
  </div>
</section>


      {/* ✉️ 4️⃣ Contact Section */}
      <section className="contact-section" id="contact">
        <h2>Contact Me</h2>
        <p>Let’s connect and discuss opportunities!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        {success && <p className="success-message">{success}</p>}
      </section>
    





  
   </div>

  )

}