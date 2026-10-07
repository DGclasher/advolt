"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  clientNames,
  faqs,
  projects,
  services,
  testimonials,
} from "@/lib/data";

function Arrow() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="eyebrow-dot" />
      {children}
    </p>
  );
}

type QuoteValues = {
  name: string;
  company: string;
  revenue: string;
  email: string;
  message: string;
};

const emptyQuote: QuoteValues = {
  name: "",
  company: "",
  revenue: "",
  email: "",
  message: "",
};

function validateQuote(values: QuoteValues) {
  const errors: Partial<Record<keyof QuoteValues, string>> = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.company.trim())
    errors.company = "Please enter your company name.";
  if (!values.revenue.trim())
    errors.revenue = "Please share your ad revenue range.";
  if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Please enter a valid email address.";
  if (!values.message.trim())
    errors.message = "Please tell us what you need help with.";
  return errors;
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [quoteOpen, setQuoteOpen] = useState(
    () =>
      typeof window !== "undefined" && window.location.hash === "#quote-form",
  );
  const [quoteValues, setQuoteValues] = useState<QuoteValues>(emptyQuote);
  const [quoteErrors, setQuoteErrors] = useState<
    Partial<Record<keyof QuoteValues, string>>
  >({});
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  useEffect(() => {
    if (!quoteOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setQuoteOpen(false);
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [quoteOpen]);

  function openQuote(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setMenuOpen(false);
    setQuoteOpen(true);
  }

  function updateQuote(field: keyof QuoteValues, value: string) {
    setQuoteValues((current) => ({ ...current, [field]: value }));
    setQuoteErrors((current) => ({ ...current, [field]: undefined }));
    setQuoteSubmitted(false);
  }

  function submitQuote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const errors = validateQuote(quoteValues);
    setQuoteErrors(errors);
    if (Object.keys(errors).length === 0) {
      // TODO: Connect this validated payload to a backend or email provider.
      setQuoteSubmitted(true);
    }
  }

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <Link className="wordmark" href="/" onClick={() => setMenuOpen(false)}>
          <span className="mark">A</span>ADVOLT
        </Link>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a className="nav-cta" href="#quote-form" onClick={openQuote}>
            Let&apos;s talk <Arrow />
          </a>
        </div>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <i />
          <i />
        </button>
      </nav>

      <section className="hero shell">
        <div className="hero-copy reveal-up">
          <Eyebrow>INDEPENDENT APPAREL GROWTH STUDIO / 2026</Eyebrow>
          <h1>
            Attention
            <br />
            <em>engineered.</em>
          </h1>
          <div className="hero-bottom">
            <p>
              We help apparel labels turn strong collections into cultural
              moments and measurable demand.
            </p>
            <div className="hero-actions">
              <a
                className="button button-dark"
                href="#quote-form"
                onClick={openQuote}
              >
                Request a quote <Arrow />
              </a>
              <a className="text-link" href="#work">
                See the work <Arrow />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract campaign composition">
          <div className="art-sticker">
            STAY
            <br />
            CURIOUS
          </div>
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-type">
            MAKE
            <br />
            <span>NOISE</span>
          </div>
          <div className="art-meta">
            <span>AD / 001</span>
            <span>
              THE NEXT DROP
              <br />
              IS IN MOTION
            </span>
          </div>
          <div className="art-line" />
        </div>
      </section>

      <div className="ticker" aria-label="Capabilities">
        <div className="ticker-track">
          STRATEGY <b>✳</b> CREATIVE <b>✳</b> PERFORMANCE <b>✳</b> CONTENT{" "}
          <b>✳</b> CONVERSION <b>✳</b> STRATEGY <b>✳</b> CREATIVE <b>✳</b>{" "}
          PERFORMANCE <b>✳</b>
        </div>
      </div>

      <section className="logo-strip shell">
        <Eyebrow>APPAREL TEAMS WE&apos;D LIKE TO WORK WITH</Eyebrow>
        <div className="client-marquee" aria-label="Sample client names">
          <div className="client-marquee-track">
            {[...clientNames, ...clientNames].map((client, index) => (
              <span key={`${client}-${index}`}>{client}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="intro shell section-rule">
        <div>
          <Eyebrow>01 / POINT OF VIEW</Eyebrow>
        </div>
        <div className="intro-copy">
          <h2>
            Great apparel marketing gets noticed.{" "}
            <em>Great labels get remembered.</em>
          </h2>
          <p>
            Advolt is a small, senior studio for apparel labels. We join the
            messy middle between a new collection and the attention it deserves,
            bringing strategy, image, media and momentum into the same room.
          </p>
          <a className="text-link" href="#quote-form" onClick={openQuote}>
            Request a quote <Arrow />
          </a>
        </div>
      </section>

      <section id="services" className="services shell section-rule">
        <div className="section-head">
          <Eyebrow>02 / WHAT WE DO</Eyebrow>
          <h2>
            Useful energy
            <br />
            <em>for the next drop.</em>
          </h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div>
                <p className="service-tag">{service.tag}</p>
                <h3>{service.title}</h3>
              </div>
              <p className="service-description">{service.description}</p>
              <Arrow />
            </article>
          ))}
        </div>
      </section>

      <section className="proof">
        <div className="shell proof-inner">
          <div>
            <Eyebrow>03 / THE RECEIPTS</Eyebrow>
            <h2>
              Proof,
              <br />
              <em>not promises.</em>
            </h2>
          </div>
          <div className="metric-grid">
            <div>
              <strong>
                42<span>+</span>
              </strong>
              <small>SAMPLE PROJECTS</small>
            </div>
            <div>
              <strong>
                67<span>%</span>
              </strong>
              <small>SAMPLE GROWTH</small>
            </div>
            <div>
              <strong>
                3.8<span>×</span>
              </strong>
              <small>SAMPLE ROAS</small>
            </div>
            <div>
              <strong>
                89<span>%</span>
              </strong>
              <small>SAMPLE SELL-THROUGH</small>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="work shell section-rule">
        <div className="section-head work-head">
          <div>
            <Eyebrow>04 / SELECTED WORK</Eyebrow>
            <h2>
              Built to move
              <br />
              <em>the collection.</em>
            </h2>
          </div>
          <p>
            Selected placeholder projects. Real stories belong here when
            they&apos;re ready to be told.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Link
              className={`project-card project-${index + 1} ${project.tone}`}
              href={`/work/${index + 1}`}
              key={project.number}
            >
              <div className={`project-visual ${project.accent}`}>
                <span className="project-shape" />
                <span className="project-index">{project.number}</span>
                <span className="project-stamp">{project.result}</span>
              </div>
              <div className="project-info">
                <div>
                  <p>
                    {project.client} / {project.category}
                  </p>
                  <h3>{project.title}</h3>
                </div>
                <Arrow />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="manifesto shell">
        <p className="manifesto-mark">✳</p>
        <h2>
          Make it clear.
          <br />
          Make it matter.
          <br />
          <em>Make it move.</em>
        </h2>
        <span className="manifesto-note">
          A working principle for every brief.
        </span>
      </section>

      <section className="process shell section-rule">
        <div className="section-head">
          <Eyebrow>05 / HOW WE WORK</Eyebrow>
          <h2>
            No theatre.
            <br />
            <em>Just momentum.</em>
          </h2>
        </div>
        <div className="process-grid">
          <div>
            <span>01</span>
            <h3>Discover</h3>
            <p>Find the real opportunity hiding underneath the brief.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Direct</h3>
            <p>Choose the sharpest route through the noise.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Make</h3>
            <p>Turn the direction into work people can feel.</p>
          </div>
          <div>
            <span>04</span>
            <h3>Compound</h3>
            <p>Learn, refine and make the next move smarter.</p>
          </div>
        </div>
      </section>

      <section className="testimonials shell section-rule">
        <div className="section-head">
          <Eyebrow>06 / TESTIMONIALS</Eyebrow>
          <h2>
            The feeling
            <br />
            <em>after the drop.</em>
          </h2>
        </div>
        <div className="testimonial-frame">
          <div className="testimonial-quote-mark">“</div>
          <blockquote>{testimonials[testimonialIndex].quote}</blockquote>
          <div className="testimonial-footer">
            <div>
              <strong>{testimonials[testimonialIndex].name}</strong>
              <span>
                {testimonials[testimonialIndex].role} /{" "}
                {testimonials[testimonialIndex].company}
              </span>
            </div>
            <div className="testimonial-controls">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() =>
                  setTestimonialIndex(
                    (testimonialIndex - 1 + testimonials.length) %
                      testimonials.length,
                  )
                }
              >
                ←
              </button>
              <span>
                0{testimonialIndex + 1} / 0{testimonials.length}
              </span>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() =>
                  setTestimonialIndex(
                    (testimonialIndex + 1) % testimonials.length,
                  )
                }
              >
                →
              </button>
            </div>
          </div>
          <small className="sample-label">Sample testimonial content</small>
        </div>
      </section>

      <section className="faq shell section-rule">
        <div className="section-head">
          <Eyebrow>07 / QUESTIONS</Eyebrow>
          <h2>
            Before we
            <br />
            <em>get started.</em>
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <div className="faq-item" key={question}>
              <button
                type="button"
                aria-expanded={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span>0{index + 1}</span>
                <strong>{question}</strong>
                <b>{openFaq === index ? "−" : "+"}</b>
              </button>
              {openFaq === index && <p>{answer}</p>}
            </div>
          ))}
        </div>
      </section>

      {quoteOpen && (
        <section
          id="contact"
          className="cta quote-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-title"
        >
          <button
            className="quote-modal-close"
            type="button"
            aria-label="Close quote form"
            onClick={() => setQuoteOpen(false)}
          >
            Close <span aria-hidden="true">×</span>
          </button>
          <div className="shell cta-inner">
            <Eyebrow>08 / YOUR MOVE</Eyebrow>
            <div className="quote-layout">
              <div>
                <h2 id="quote-title">
                  Have a collection
                  <br />
                  <em>to move?</em>
                </h2>
                <p>
                  Tell us what you&apos;re launching, where it&apos;s stuck and
                  what would make the next drop count.
                </p>
              </div>
              <form
                id="quote-form"
                className="quote-form"
                onSubmit={submitQuote}
                noValidate
              >
                <div className="form-field">
                  <label htmlFor="quote-name">Name</label>
                  <input
                    id="quote-name"
                    name="name"
                    value={quoteValues.name}
                    onChange={(event) =>
                      updateQuote("name", event.target.value)
                    }
                    aria-invalid={Boolean(quoteErrors.name)}
                    aria-describedby={
                      quoteErrors.name ? "quote-name-error" : undefined
                    }
                  />
                  {quoteErrors.name && (
                    <span id="quote-name-error" className="form-error">
                      {quoteErrors.name}
                    </span>
                  )}
                </div>
                <div className="form-field">
                  <label htmlFor="quote-company">Company Name</label>
                  <input
                    id="quote-company"
                    name="company"
                    value={quoteValues.company}
                    onChange={(event) =>
                      updateQuote("company", event.target.value)
                    }
                    aria-invalid={Boolean(quoteErrors.company)}
                    aria-describedby={
                      quoteErrors.company ? "quote-company-error" : undefined
                    }
                  />
                  {quoteErrors.company && (
                    <span id="quote-company-error" className="form-error">
                      {quoteErrors.company}
                    </span>
                  )}
                </div>
                <div className="form-field">
                  <label htmlFor="quote-revenue">Ad Revenue</label>
                  <input
                    id="quote-revenue"
                    name="revenue"
                    value={quoteValues.revenue}
                    onChange={(event) =>
                      updateQuote("revenue", event.target.value)
                    }
                    placeholder="Range or monthly spend"
                    aria-invalid={Boolean(quoteErrors.revenue)}
                    aria-describedby={
                      quoteErrors.revenue ? "quote-revenue-error" : undefined
                    }
                  />
                  {quoteErrors.revenue && (
                    <span id="quote-revenue-error" className="form-error">
                      {quoteErrors.revenue}
                    </span>
                  )}
                </div>
                <div className="form-field">
                  <label htmlFor="quote-email">Email Address</label>
                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    value={quoteValues.email}
                    onChange={(event) =>
                      updateQuote("email", event.target.value)
                    }
                    aria-invalid={Boolean(quoteErrors.email)}
                    aria-describedby={
                      quoteErrors.email ? "quote-email-error" : undefined
                    }
                  />
                  {quoteErrors.email && (
                    <span id="quote-email-error" className="form-error">
                      {quoteErrors.email}
                    </span>
                  )}
                </div>
                <div className="form-field form-field-wide">
                  <label htmlFor="quote-message">Message</label>
                  <textarea
                    id="quote-message"
                    name="message"
                    rows={4}
                    value={quoteValues.message}
                    onChange={(event) =>
                      updateQuote("message", event.target.value)
                    }
                    aria-invalid={Boolean(quoteErrors.message)}
                    aria-describedby={
                      quoteErrors.message ? "quote-message-error" : undefined
                    }
                  />
                  {quoteErrors.message && (
                    <span id="quote-message-error" className="form-error">
                      {quoteErrors.message}
                    </span>
                  )}
                </div>
                <button
                  className="button button-light form-submit"
                  type="submit"
                >
                  Request a Quote <Arrow />
                </button>
                {quoteSubmitted && (
                  <p className="form-success" role="status">
                    Thanks. Your details are ready for the next step. Connect
                    this form to your preferred backend to complete submission.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      )}

      <footer className="footer shell">
        <div>
          <Link className="wordmark" href="/">
            <span className="mark">A</span>ADVOLT
          </Link>
          <p>
            Attention, engineered.
            <br />
            Apparel growth, from first sketch to final sale.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <small>EXPLORE</small>
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
          </div>
          <div>
            <small>ELSEWHERE</small>
            <a href="#quote-form" onClick={openQuote}>
              Request a quote
            </a>
            <a href="#quote-form" onClick={openQuote}>
              LinkedIn
            </a>
            <a href="#quote-form" onClick={openQuote}>
              Instagram
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 [AGENCY NAME]</span>
          <span>Built for the next move.</span>
        </div>
      </footer>
    </main>
  );
}
