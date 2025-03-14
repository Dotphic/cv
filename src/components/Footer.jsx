import React from "react";
import "./Footer.css";

const links = [
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Solution",
    href: "#",
  },
  {
    title: "Customers",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Help",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-branding">
            <div className="logo">Dotphic</div>
            <p className="footer-description">
              Modern, accessible portfolio website showcasing my work and
              expertise.
            </p>
          </div>
          <nav className="footer-nav">
            <ul className="footer-links-list">
              {links.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="footer-link">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Dotphic. All rights reserved.
          </p>

          <div className="footer-social">
            <a href="#" className="footer-social-link">
              Twitter
            </a>
            <a href="#" className="footer-social-link">
              GitHub
            </a>
            <a href="#" className="footer-social-link">
              LinkedIn
            </a>
          </div>
          <p className="footer-copyright">
            powered by Injera. Made by{" "}
            <a href="https://github.com/NatnaelTaddese">NAT</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
