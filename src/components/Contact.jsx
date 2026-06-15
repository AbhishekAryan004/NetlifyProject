import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { profile } from "../data/resumeData";

export default function Contact() {
  return (
    <>
      <section id="contact" className="section contact">
        <div className="section__inner">
          <p className="eyebrow eyebrow--center">04 / Contact</p>
          <h2 className="contact__title">Let's build something.</h2>
          <p className="section__lede" style={{ margin: "0 auto" }}>
            Open to full-stack and AI engineering roles — reach out by email
            or connect with me below.
          </p>

          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>

          <div className="contact__socials">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={profile.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="contact__actions">
            <a
              className="btn btn--primary"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Download résumé
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="footer__status">
            <span className="status-dot" aria-hidden="true" />
            Open to opportunities · {profile.location}
          </span>
        </div>
      </footer>
    </>
  );
}
