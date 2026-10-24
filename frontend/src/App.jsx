
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUp,
  MapPin,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./App.css";

const heroSlides = [
  {
    image: "/ramesh-rao-pilot.png",
    alt: "Dr. Ramesh Rao Pilot",
    eyebrow: "MAHENDRAGARH | HARYANA",
    title: "Dr. Ramesh Rao",
    highlight: "Pilot",
    description:
      "Discover the professional journey, public activities and latest updates of Dr. Ramesh Rao Pilot.",
  },
  {
    image: "/event1.png",
    alt: "Dr. Ramesh Rao Pilot at a public gathering",
    eyebrow: "PUBLIC SERVICE | HARYANA",
    title: "Dedicated to",
    highlight: "Public Service",
    description:
      "Explore the work, activities and journey of Dr. Ramesh Rao Pilot.",
  },
  {
    image: "/event2.png",
    alt: "Dr. Ramesh Rao Pilot at a public event",
    eyebrow: "MAHENDRAGARH | HARYANA",
    title: "Building a",
    highlight: "Better Tomorrow",
    description:
      "Stay updated with the latest initiatives and public activities.",
  },
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  const changeSlide = (direction) => {
    setActiveSlide(
      (current) =>
        (current + direction + heroSlides.length) % heroSlides.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 40000);

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <main id="top">
      <nav className="navbar">
        <a href="#top" className="brand">
          <span className="brand-mark">
            <img src="/ramesh-logo.png" alt="Dr. Ramesh Rao Pilot" />
          </span>

          <span className="brand-text">
            <strong>Dr. Ramesh Rao Pilot</strong>
            <small>Social Activist</small>
          </span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#activities">Public Life</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="menu-button"
          aria-label="Menu"
          type="button"
          onClick={() => {
            document.querySelector(".nav-links")?.classList.toggle("nav-open");
          }}
        >
          <Menu />
        </button>
      </nav>

      {/* HERO SLIDESHOW */}
      <section className="hero">
        <AnimatePresence mode="wait">
          <motion.div
            key={`copy-${activeSlide}`}
            className="hero-copy"
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.45 }}
          >
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              {slide.eyebrow}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.45 }}
            >
              {slide.title}
              <span> {slide.highlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.45 }}
            >
              {slide.description}
            </motion.p>

            <motion.a
              className="primary-button"
              href="#about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.4 }}
            >
              Explore His Journey <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </AnimatePresence>

        <div className="hero-art">
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${activeSlide}`}
              className="portrait-placeholder"
              initial={{ opacity: 0, scale: 0.94, x: 25 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.97, x: -15 }}
              transition={{ duration: 0.5 }}
            >
              <img src={slide.image} alt={slide.alt} />
            </motion.div>
          </AnimatePresence>

          <div className="tricolour-line" />

          <div className="hero-arrows">
            <button
              type="button"
              className="hero-arrow"
              onClick={() => changeSlide(-1)}
              aria-label="Previous slide"
            >
              <ChevronLeft size={23} />
            </button>

            <button
              type="button"
              className="hero-arrow"
              onClick={() => changeSlide(1)}
              aria-label="Next slide"
            >
              <ChevronRight size={23} />
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="content-section" id="about">
        <motion.div
          className="section-copy"
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">THE JOURNEY</span>
          <h2>A life beyond the headlines.</h2>
          <p>
            Explore his verified biography, professional background
            and public activities through one official platform.
          </p>
        </motion.div>

        <motion.div
          className="section-card"
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <span className="card-symbol">✳</span>
          <h3>Professional Journey</h3>
          <p>
            A dedicated space for verified milestones and
            approved biographical information.
          </p>
        </motion.div>
      </section>

      {/* NEWS */}
      <section className="news-section" id="news">
        <div className="news-heading">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="news-kicker">LATEST FROM MAHENDRAGARH</span>
            <h2>News &amp; Public Activities</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Updates, public engagements and important moments from
            Dr. Ramesh Rao Pilot&apos;s journey.
          </motion.p>
        </div>

        <div className="news-grid">
          <motion.article
            className="news-feature"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
          >
            <a href="#contact" className="news-image-link">
              <img
                src="/event1.png"
                alt="Dr. Ramesh Rao Pilot at a public gathering"
              />
              <span className="news-image-label">FEATURED</span>
            </a>

            <div className="news-meta">
              <span>PUBLIC LIFE</span>
              <span className="news-dot" />
              <span>Mahendragarh, Haryana</span>
            </div>

            <h3>Public Engagements &amp; Community Connections</h3>
            <p>
              Explore moments from public gatherings, interactions
              and activities shared through the official website.
            </p>

            <a href="#about" className="news-read-more">
              Explore his journey <ArrowRight size={17} />
            </a>
          </motion.article>

          <div className="news-side">
            <motion.article
              className="news-small-card"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: 0.15 }}
            >
              <img
                src="/event2.png"
                alt="Dr. Ramesh Rao Pilot at a public event"
              />

              <div className="news-small-content">
                <span className="news-category">PUBLIC ACTIVITIES</span>
                <h3>Moments from Public Life</h3>
                <p>Photographs and updates from public engagements.</p>
                <a href="#about" aria-label="Explore public activities">
                  <ArrowRight size={19} />
                </a>
              </div>
            </motion.article>

            <motion.article
              className="news-small-card"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: 0.3 }}
            >
              <img
                src="/event3.png"
                alt="Dr. Ramesh Rao Pilot speaking at a gathering"
              />

              <div className="news-small-content">
                <span className="news-category">LATEST UPDATES</span>
                <h3>News &amp; Announcements</h3>
                <p>
                  Important announcements and verified updates will
                  be published here.
                </p>
                <a href="#contact" aria-label="View latest updates">
                  <ArrowRight size={19} />
                </a>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* MEDIA COVERAGE */}
      <section className="media-coverage" id="media">
        <div className="media-heading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="media-eyebrow">IN THE NEWS</span>
            <h2>Media Coverage</h2>
          </motion.div>

          <a href="#news" className="media-view-all">
            Latest updates <ArrowRight size={17} />
          </a>
        </div>

        <div className="media-grid">
          {[
            {
              category: "PUBLIC LIFE",
              title: "Public Engagements & Community Connections",
              description:
                "Highlights from public gatherings and community interactions.",
            },
            {
              category: "MAHENDRAGARH",
              title: "Updates from the Region",
              description:
                "Follow verified announcements and activities from the region.",
            },
            {
              category: "EVENTS",
              title: "Moments from Public Events",
              description:
                "Photographs and highlights from public meetings and events.",
            },
            {
              category: "ANNOUNCEMENTS",
              title: "Official News & Updates",
              description:
                "Important updates published through the official website.",
            },
          ].map((item, index) => (
            <motion.article
              className="media-card"
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              <span className="media-card-category">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#news" aria-label={`Read ${item.title}`}>
                Explore story <ArrowRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      {/* EXCLUSIVE */}
      <section className="exclusive-section" id="exclusive">
        <motion.div
          className="exclusive-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="exclusive-kicker">A CLOSER LOOK</span>
          <h2>Beyond the Headlines</h2>
          <p>
            Discover the journey, public moments, thoughts and stories
            connected with Dr. Ramesh Rao Pilot.
          </p>
        </motion.div>

        <div className="exclusive-grid">
          <div className="exclusive-column">
            <motion.article
              className="exclusive-card quote-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="quote-mark">“</span>
              <span className="exclusive-tag">THOUGHTS &amp; VALUES</span>
              <h3>A journey shaped by purpose and dedication.</h3>
              <p>
                Explore personal reflections, guiding principles and
                messages shared through verified official sources.
              </p>
              <span className="quote-footer">WORDS &amp; REFLECTIONS</span>
            </motion.article>

            <motion.article
              className="exclusive-card exclusive-photo-card"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <img
                src="/event5.png"
                alt="Dr. Ramesh Rao Pilot at a public gathering"
              />
              <span className="exclusive-tag photo-tag">PUBLIC LIFE</span>
              <div className="exclusive-photo-caption">
                <h3>Moments from the journey</h3>
                <p>Public gatherings and memorable occasions.</p>
              </div>
            </motion.article>
          </div>

          <div className="exclusive-column exclusive-middle">
            <motion.article
              className="exclusive-card exclusive-tall-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.12 }}
            >
              <img
                src="/event4.png"
                alt="Dr. Ramesh Rao Pilot speaking at a public event"
              />
              <span className="exclusive-tag photo-tag">FEATURED STORY</span>
              <div className="exclusive-photo-caption">
                <h3>The person behind the public profile</h3>
                <p>Explore his journey and verified background.</p>
                <a href="#about">
                  Discover more <ArrowRight size={15} />
                </a>
              </div>
            </motion.article>
          </div>

          <div className="exclusive-column">
            <motion.article
              className="exclusive-card exclusive-photo-card exclusive-portrait-card"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.18 }}
            >
              <img src="/event6.png" alt="Dr. Ramesh Rao Pilot" />
              <span className="exclusive-tag photo-tag">BIOGRAPHY</span>
              <div className="exclusive-photo-caption">
                <h3>Know the journey</h3>
                <p>Background, milestones and public activities.</p>
              </div>
            </motion.article>

            <motion.article
              className="exclusive-card blog-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <span className="exclusive-tag">LATEST STORIES</span>
              <h3>Updates &amp; Reflections</h3>
              <p>
                Read published announcements, verified updates and
                stories from public engagements.
              </p>
              <a href="#news">
                Explore updates <ArrowRight size={16} />
              </a>
            </motion.article>
          </div>
        </div>
      </section>

      {/* FEATURED JOURNEY BANNER */}
      <section className="journey-banner">
        <div className="journey-banner-image" />

        <motion.div
          className="journey-banner-content"
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="journey-script">
            A journey of dedication and public service
          </span>

          <h2>
            THE
            <br />
            JOURNEY
          </h2>

          <a href="#about" className="journey-explore">
            EXPLORE NOW <ArrowRight size={22} />
          </a>
        </motion.div>

        <span className="journey-side-label">
          Dr. Ramesh Rao Pilot | HARYANA
        </span>
      </section>

      {/* PUBLIC ENGAGEMENTS */}
      <section className="engagement-section" id="activities">
        <motion.div
          className="engagement-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="exclusive-kicker">ON THE GROUND</span>
          <h2>
            Public Engagements &amp; Events <ArrowRight size={24} />
          </h2>
          <p>
            Explore public gatherings, community interactions and
            important events through published updates.
          </p>
        </motion.div>

        <div className="engagement-grid">
          {[
            {
              number: "01",
              title: "Public Gatherings",
              text: "Highlights and photographs from public meetings and gatherings.",
            },
            {
              number: "02",
              title: "Community Connections",
              text: "Moments of interaction with people and the local community.",
            },
            {
              number: "03",
              title: "Events & Updates",
              text: "Browse announcements and updates from public activities.",
            },
          ].map((item, index) => (
            <motion.article
              className="engagement-card"
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.13 }}
            >
              <span className="engagement-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <a href="#news" aria-label={`Explore ${item.title}`}>
                <ArrowRight size={19} />
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="site-footer">
        <div className="footer-top-line" />

        <div className="footer-container">
          <div className="footer-intro">
            <div className="footer-brand">
              <img
                src="/ramesh-logo.png"
                alt="Dr. Ramesh Rao Pilot logo"
                className="footer-logo"
              />
              <div>
                <h2>Dr. Ramesh Rao Pilot</h2>
                <span>OFFICIAL WEBSITE</span>
              </div>
            </div>

            <p className="footer-tagline">
              Public Life. Community Connect.
              <br />
              A journey rooted in Mahendragarh, Haryana.
            </p>

            <p className="footer-description">
              Explore the journey, public engagements, news and activities
              of Dr. Ramesh Rao Pilot through this official website.
            </p>

            <a href="#about" className="footer-explore">
              EXPLORE THE JOURNEY <ArrowRight size={17} />
            </a>
          </div>

          <div className="footer-column">
            <h3>EXPLORE</h3>
            <a href="#about">About</a>
            <a href="#activities">Public Activities</a>
            <a href="#news">Latest News</a>
            <a href="#media">Media Coverage</a>
          </div>

          <div className="footer-column">
            <h3>DISCOVER</h3>
            <a href="#about">Journey &amp; Background</a>
            <a href="#activities">Community Engagement</a>
            <a href="#news">Events &amp; Updates</a>
            <a href="#exclusive">Featured Highlights</a>
          </div>

          <div className="footer-column footer-location">
            <h3>LOCATION</h3>
            <MapPin className="footer-location-icon" size={25} />
            <h4>Mahendragarh</h4>
            <p>Haryana, India</p>
            <a href="#about" className="footer-contact-link">
              Get in Touch <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="footer-highlight">
          <span className="footer-highlight-line" />
          <p>STAY CONNECTED WITH THE JOURNEY</p>
          <span className="footer-highlight-line" />
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              &copy; {new Date().getFullYear()} Dr. Ramesh Rao Pilot.
              All rights reserved.
            </p>
            <span>Mahendragarh, Haryana, India</span>
          </div>

          <div className="footer-credit">
            <span>DESIGNED &amp; DEVELOPED BY</span>
            <strong>PKY TECHNOLOGIES</strong>
          </div>

          <a
            href="#top"
            className="footer-back-top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            BACK TO TOP <ArrowUp size={15} />
          </a>
        </div>
      </footer>
    </main>
  );
}
