// 
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";
import "./global.css";

const Contact = () => {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-title">
          <h2>
            Get In <span>Touch</span>
          </h2>
          <p>Have a project in mind? Let's work together!</p>
        </div>

        <div className="contact-container">
          {/* LEFT SIDE */}
          <div className="contact-info">
            <h3>Let's talk about everything!</h3>
            <p>
              Don’t like forms? Send me an email or connect with me on social
              media.
            </p>

            <div className="info-box">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>ayyappanm216@gmail.com</p>
              </div>
            </div>

            <div className="info-box">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 9842486924</p>
              </div>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Location</h4>
                <p>Chennai, Tamil Nadu, India</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="social-icons">
              <h4>Follow me on:</h4>
              <div className="icons">
                <a href="#">
                  <FaLinkedin />
                </a>
                <a href="#">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-form">
            <form>
              <label>Your Name</label>
              <input type="text" placeholder="Your Name" required />
               <label>Email Address</label>
              <input type="email" placeholder="Email Address" required />
                <label>Subject</label>
              <input type="text" placeholder="Subject" />
                <label>Message</label>
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
              ></textarea>

              <button type="submit">
                <FaEnvelope /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © 2024 <span>Ayyappan</span>. All rights reserved.
        </p>
        <p>
          Made with ❤️ using React & Tailwind CSS
        </p>

        <a href="#contact" className="scroll-top">
          <FaArrowUp />
        </a>
      </footer>
    </>
  );
};

export default Contact;