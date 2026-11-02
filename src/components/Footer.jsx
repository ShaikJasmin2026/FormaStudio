import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const footerLinks = [
  { label: "Our Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "About Us", href: "#about" },
  { label: "Insights", href: "#blog" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    Icon: FaLinkedinIn,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/",
    Icon: FaTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    Icon: FaInstagram,
  },
];

const studioValues = [
  "Strategy",
  "Creative",
  "Development",
];

function FooterShapes() {
  return (
    <div className="footer-shapes" aria-hidden="true">
      <span className="footer-shape footer-circle" />
      <span className="footer-shape footer-triangle" />
      <span className="footer-shape footer-diamond" />
      <span className="footer-shape footer-hexagon" />
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="footer-socials" aria-label="Social media links">
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit us on ${label}`}
        >
          <Icon size={19} />
        </a>
      ))}
    </div>
  );
}

function StudioValues() {
  return (
    <div className="footer-partners" aria-label="Our capabilities">
      {studioValues.map((value) => (
        <span className="footer-partner" key={value}>
          <strong>✳</strong>&nbsp; {value}
        </span>
      ))}
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-container">
        {/* TOP SECTION */}
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-kicker">
              Independent Digital Studio
            </p>

            <h2>
              Good ideas deserve
              <br />
              to become <span>great things.</span>
            </h2>

            <p className="footer-brand-copy">
              We bring strategy, design, and technology together
              to create digital experiences that make a difference.
              Have a project in mind? Let’s make it happen.
            </p>

            <div className="footer-contact-panel">
              <span className="footer-contact-label">
                Have a project to discuss?
              </span>

              <address className="footer-address">
                <span>We’d love to hear from you.</span>

                {/* Replace with your real business email */}
                <a href="mailto:hello@yourstudio.com">
                  hello@yourstudio.com
                </a>
              </address>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav
            className="footer-navigation"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* SOCIAL LINKS AND CAPABILITIES */}
        <div className="footer-middle">
          <SocialLinks />
          <StudioValues />
        </div>

        {/* BOTTOM SECTION */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <div className="footer-policy-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <span aria-hidden="true">/</span>
              <a href="/cookie-policy">Cookie Policy</a>
            </div>

            <p>
              © {currentYear} Your Studio. Made with creativity and care.
            </p>
          </div>

          <FooterShapes />
        </div>
      </div>
    </footer>
  );
}