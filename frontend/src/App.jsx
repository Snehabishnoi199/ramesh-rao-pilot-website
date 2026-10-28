
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
import YouTubeSection from './components/YouTubeSection'

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
  const [language, setLanguage] = useState("EN");
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
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <main id="top">
     
<nav className="navbar">
  {/* EXISTING LOGO — KEEP AS IT IS */}
  <a href="#top" className="brand">
    <span className="brand-mark">
      <img src="/ramesh-logo.png" alt="Dr. Ramesh Rao Pilot" />
    </span>

    <span className="brand-text">
      <strong>Dr. Ramesh Rao Pilot</strong>
      <small>Social Activist</small>
    </span>
  </a>

  {/* ALL LINKS IN ONE HORIZONTAL LINE */}
  <div className="nav-links">
    <a href="#top">Home</a>
    <a href="#about">About</a>
    <a href="#activities">Events</a>
    <a href="#exclusive">Speeches</a>
    <a href="#gallery">Photo Gallery</a>
    <a href="#media">Press</a>
    <a href="#contact">Contact Us</a>
  </div>
  <div className="language-switch">
  <button
    type="button"
    onClick={() => setLanguage("en")}
    className={language === "en" ? "active" : ""}
  >
    English
  </button>

  <span>|</span>

  <button
    type="button"
    onClick={() => setLanguage("hi")}
    className={language === "hi" ? "active" : ""}
  >
    हिंदी
  </button>
</div>

  {/* MOBILE MENU */}
  <button
    className="menu-button"
    aria-label="Toggle navigation menu"
    aria-expanded={
      typeof document !== "undefined" &&
      document.querySelector(".nav-links")?.classList.contains("nav-open")
    }
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
  {/* TEXT: TOP TO BOTTOM, ONE BY ONE */}
  <AnimatePresence mode="wait">
    <motion.div
      key={`copy-${activeSlide}`}
      className="hero-copy"
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Eyebrow */}
      <motion.span
        className="eyebrow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {slide.eyebrow}
      </motion.span>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {slide.title}
        <span> {slide.highlight}</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.45,
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {slide.description}
      </motion.p>

      {/* Button */}
      <motion.a
        className="primary-button"
        href="#about"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        Explore His Journey <ArrowRight size={18} />
      </motion.a>
    </motion.div>
  </AnimatePresence>

  {/* PHOTO: SLIDE IN FROM RIGHT */}
  <div className="hero-art">
    <AnimatePresence mode="wait">
      <motion.div
        key={`image-${activeSlide}`}
        className="portrait-placeholder"
        initial={{
          opacity: 0,
          x: 80,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          x: 40,
          scale: 0.98,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <img src={slide.image} alt={slide.alt} />
      </motion.div>
    </AnimatePresence>

    <div className="tricolour-line" />

    {/* PREVIOUS / NEXT BUTTONS */}
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
<YouTubeSection />

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
      <span className="media-eyebrow">AS FEATURED IN THE PRESS</span>
      <h2>Media Coverage</h2>
    </motion.div>

    <a
      href="https://timesofindia.indiatimes.com/elections/lok-sabha-elections/haryana/news/haryana-bsp-lsp-name-six-candidates/articleshow/68698835.cms"
      className="media-view-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      Latest updates <ArrowRight size={17} />
    </a>
  </div>

  <div className="media-grid">
    {[
     
{
  category: "HONORARY DOCTORATE",
  title: "Ramesh Rao Pilot Honoured with Honorary Doctorate",
  description:
    "Read the news report about Ramesh Rao Pilot being honoured with an honorary doctorate for his contributions to society.",
  url: "https://www.amarujala.com/haryana/mahendragarh-narnaul/pilot-honored-upon-receiving-honorary-doctorate-narnol-news-c-203-1-mgh1006-131140-2026-10-18",
},

      {
        category: "THE TIMES OF INDIA",
        title: "LSP-BSP Alliance Announces Candidates",
        description:
          "A follow-up report on the alliance's Lok Sabha candidate announcements in Haryana, including Ramesh Rao Pilot.",
        url: "https://timesofindia.indiatimes.com/city/gurgaon/lsp-bsp-alliance-announces-sirsa-kurukshetra-candidates/articleshow/68865670.cms",
      },
      {
        category: "DAINIK BHASKAR",
        title: "कांग्रेस कर रही किसान हित का नाटक",
        description:
          "A Mahendragarh report mentioning Ramesh Rao Pilot's role in organising the programme and his remarks on local issues.",
        url: "https://www.bhaskar.com/news/har-oth-narn-mat-latest-narnaul-news-023004-2814921-nor.html",
      },
      {
        category: "ELECTION COVERAGE",
        title: "Bhiwani-Mahendragarh Lok Sabha Results",
        description:
          "Explore constituency election results, including Ramesh Rao Pilot's 2019 electoral record.",
        url: "https://timesofindia.indiatimes.com/elections/lok-sabha-constituencies/haryana/bhiwani-mahendragarh",
      },
    ].map((item, index) => (
      <motion.article
        className="media-card"
        key={item.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.55,
          delay: index * 0.12,
        }}
      >
        <span className="media-card-category">
          {item.category}
        </span>

        <h3>{item.title}</h3>

        <p>{item.description}</p>

        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read ${item.title} on the original website`}
        >
          Read full article <ArrowRight size={16} />
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
