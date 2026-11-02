import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import "./css/Contact.css";

const projects = [
  {
    id: 1,
    name: "United Carpets and Beds",
    category: "E-commerce Development",
    description:
      "Making shopping seamless for United Carpets and Beds customers.",
    image: "/images/unitedcarpets-hexhero.webp",
  },
  {
    id: 2,
    name: "Vita Student",
    category: "Website Design",
    description:
      "Positioning Vita Student's website for the Chinese market.",
    image: "/images/vita-china-hexhero.webp",
  },
  {
    id: 3,
    name: "NatWest",
    category: "Digital Experiences",
    description:
      "Bringing Open Banking to WordPress with NatWest Payit.",
    image: "/images/michal-biernat.webp",
  },
];

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    message: "",
    marketingConsent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Connect your backend API here to submit the enquiry.
    console.log("Contact form data:", formData);

    setSubmitted(true);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      jobTitle: "",
      message: "",
      marketingConsent: false,
    });
  };

  return (
    <main className="contact-page">

      {/* HERO SECTION */}

      <section className="contact-hero">

        <div className="contact-hero-container">

          <motion.span
            className="contact-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="contact-eyebrow-line" />
            LET'S START SOMETHING
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's make
            <br />
            something
            <br />
            <span>great together.</span>
          </motion.h1>

          <div className="contact-hero-bottom">

            <p>
              Have a project you'd like to discuss?
              We'd love to hear from you. Tell us what
              you're thinking and let's explore what's possible.
            </p>

            <a href="#contact-form" className="contact-explore-link">
              Get in touch
              <ArrowRight size={20} />
            </a>

          </div>

          <div className="contact-hero-decoration">
            <span className="contact-decoration-circle" />
            <span className="contact-decoration-square" />
            <span className="contact-decoration-triangle" />
          </div>

        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="contact-introduction">

        <div className="contact-intro-heading">

          <span className="contact-label">CONTACT US</span>

          <h2>
            Good conversations
            <br />
            start with <span>hello.</span>
          </h2>

        </div>

        <div className="contact-intro-content">

          <p className="contact-intro-large">
            If you've got a project you'd like to discuss,
            then we'd love to hear from you!
          </p>

          <p>
            Perhaps you've got a question about our services
            or want to know a bit more about our work.
            We're happy to help.
          </p>

          <p>
            You might still be pulling together that brief,
            or simply figuring out which technology is right
            for your business. The more, the merrier.
          </p>

        </div>

      </section>

      {/* CONTACT FORM */}

      <section className="contact-form-section" id="contact-form">

        <div className="contact-form-heading">

          <span className="contact-label">GET IN TOUCH</span>

          <h2>
            Tell us a little
            <br />
            <span>about your project.</span>
          </h2>

          <p>
            Fill in the form below and we'll be in touch.
            Fields marked with * are required.
          </p>

          <div className="contact-form-decoration">
            <span />
            <span />
            <span />
          </div>

        </div>

        <div className="contact-form-wrapper">

          {submitted ? (
            <div className="contact-success-message">
              <span className="contact-success-icon">
                ✓
              </span>

              <h3>Thank you for getting in touch!</h3>

              <p>
                Your form was submitted in this demo.
                Connect a backend API to receive enquiries.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Send another enquiry
                <ArrowRight size={18} />
              </button>
            </div>
          ) : (

            <form onSubmit={handleSubmit}>

              {/* NAME */}

              <div className="contact-form-group">

                <label>
                  Name <span>*</span>
                </label>

                <div className="contact-name-fields">

                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />

                    <small>First</small>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />

                    <small>Last</small>
                  </div>

                </div>

              </div>

              {/* EMAIL */}

              <div className="contact-form-group">

                <label htmlFor="contact-email">
                  Email <span>*</span>
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* PHONE */}

              <div className="contact-form-group">

                <label htmlFor="contact-phone">
                  Phone
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>

              {/* JOB TITLE */}

              <div className="contact-form-group">

                <label htmlFor="contact-job">
                  Job Title
                </label>

                <input
                  id="contact-job"
                  type="text"
                  name="jobTitle"
                  placeholder="Your job title"
                  value={formData.jobTitle}
                  onChange={handleChange}
                />

              </div>

              {/* MESSAGE */}

              <div className="contact-form-group">

                <label htmlFor="contact-message">
                  Message <span>*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* MARKETING CONSENT */}

              <div className="contact-consent">

                <h4>Marketing Consent</h4>

                <label className="contact-checkbox-label">

                  <input
                    type="checkbox"
                    name="marketingConsent"
                    checked={formData.marketingConsent}
                    onChange={handleChange}
                  />

                  <span className="custom-checkbox" />

                  <span>
                    I want to be contacted about marketing
                    materials from our company.
                  </span>

                </label>

              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit-button"
              >
                Send your enquiry
                <ArrowUpRight size={21} />
              </button>

              <p className="contact-privacy-text">
                By submitting this form, you agree that
                we may use your information to respond
                to your enquiry. Please read our privacy
                policy for more information.
              </p>

            </form>

          )}

        </div>

      </section>

      {/* OFFICE LOCATIONS */}

      <section className="contact-locations">

        <div className="contact-location-heading">

          <span className="contact-label">COME SAY HELLO</span>

          <h2>
            Visit <span>us.</span>
          </h2>

          <p>
            We'd love to welcome you. Find us at one
            of our studio locations.
          </p>

        </div>

        <div className="contact-location-grid">

          {/* BRIGHOUSE */}

          <motion.div
            className="contact-location-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <span className="contact-location-number">01</span>

            <div className="contact-location-icon">
              <MapPin size={25} />
            </div>

            <span className="contact-location-type">
              OUR MAIN STUDIO
            </span>

            <h3>Brighouse Studio</h3>

            <p className="contact-location-address">
              Elementary Digital
              <br />
              St Pegs Mill, Thornhill Beck Lane
              <br />
              Brighouse
              <br />
              West Yorkshire
              <br />
              HD6 4AH
              <br />
              United Kingdom
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=St+Pegs+Mill+Thornhill+Beck+Lane+Brighouse"
              target="_blank"
              rel="noreferrer"
              className="contact-location-link"
            >
              Get directions
              <ArrowUpRight size={18} />
            </a>

          </motion.div>

          {/* LONDON */}

          <motion.div
            className="contact-location-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >

            <span className="contact-location-number">02</span>

            <div className="contact-location-icon">
              <MapPin size={25} />
            </div>

            <span className="contact-location-type">
              OUR LONDON OFFICE
            </span>

            <h3>London Office</h3>

            <p className="contact-location-address">
              Elementary Digital
              <br />
              20-22 Wenlock Road
              <br />
              London
              <br />
              N1 7GU
              <br />
              United Kingdom
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=20-22+Wenlock+Road+London+N1+7GU"
              target="_blank"
              rel="noreferrer"
              className="contact-location-link"
            >
              Get directions
              <ArrowUpRight size={18} />
            </a>

          </motion.div>

        </div>

      </section>

      {/* CONTACT DETAILS */}

      <section className="contact-details">

        <div className="contact-details-heading">

          <span className="contact-label">STAY CONNECTED</span>

          <h2>
            Prefer a different
            <br />
            way to <span>connect?</span>
          </h2>

        </div>

        <div className="contact-details-grid">

          <div className="contact-detail-item">
            <div className="contact-detail-icon">
              <Phone size={23} />
            </div>

            <span>CALL OUR LONDON OFFICE</span>

            <h3>020 8012 8275</h3>
          </div>

          <div className="contact-detail-item">
            <div className="contact-detail-icon">
              <Mail size={23} />
            </div>

            <span>SEND US AN EMAIL</span>

            <h3>Get in touch through our form</h3>
          </div>

        </div>

      </section>

      {/* SELECTED WORK */}

      <section className="contact-selected-work">

        <div className="contact-selected-heading">

          <div>
            <span className="contact-label">A LITTLE OF WHAT WE DO</span>

            <h2>
              Our <span>work.</span>
            </h2>
          </div>

          <a href="/work" className="contact-view-work">
            View all projects
            <ArrowRight size={19} />
          </a>

        </div>

        <div className="contact-project-grid">

          {projects.map((project, index) => (

            <motion.article
              className="contact-project-card"
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
            >

              <div className="contact-project-image">

                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <span className="contact-project-arrow">
                  <ArrowUpRight size={22} />
                </span>

              </div>

              <div className="contact-project-info">

                <span>{project.category}</span>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

              </div>

            </motion.article>

          ))}

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="contact-final-cta">

        <span className="contact-label">
          YOUR NEXT BIG IDEA STARTS HERE
        </span>

        <h2>
          Let's create
          <br />
          something <span>meaningful.</span>
        </h2>

        <p>
          Have an exciting idea? We're ready to listen.
          Let's turn your vision into something great.
        </p>

        <a href="#contact-form" className="contact-final-button">
          Start a conversation
          <ArrowUpRight size={21} />
        </a>

      </section>

    </main>
  );
}

export default ContactPage;