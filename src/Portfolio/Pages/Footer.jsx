
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import './Footer.css'
export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Vikram Kumar. All rights reserved.</p>
      <div className="footer-social">
        <a href="https://www.linkedin.com/in/vikram-kumar-824037301"
         target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/your-instagram-id" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="mailto:yourmail@gmail.com"><FaEnvelope /></a>
      </div>
      <a href="#top" className="back-to-top">⬆ Back to Top</a>
    </footer>
  );
}
