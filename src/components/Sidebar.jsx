import { useState } from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import profileImg from "../assets/wallpaper.jpg";
import { profile } from "../data/resumeData";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <button
        className="sidebar__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`sidebar ${open ? "sidebar--open" : ""}`}>
        <a href="#home" className="sidebar__photo" onClick={close}>
          <img src={profileImg} alt={profile.name} />
        </a>

        <h1 className="sidebar__name">{profile.name}</h1>
        <p className="sidebar__role">{profile.role}</p>

        <div className="sidebar__socials">
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

        <nav className="sidebar__nav" aria-label="Primary">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {open && <div className="sidebar__overlay" onClick={close} aria-hidden="true" />}
    </>
  );
}
