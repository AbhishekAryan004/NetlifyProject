import wallpaper from "../assets/wallpaper.jpg";
import { profile } from "../data/resumeData";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="eyebrow eyebrow--center">Welcome to my portfolio</p>
        <h1 className="hero__title">{profile.name}</h1>
        <p className="hero__tagline">{profile.role} · {profile.tagline}</p>
        <a href="#about" className="btn btn--ghost hero__scroll">
          Scroll to explore ↓
        </a>
      </div>
    </section>
  );
}
