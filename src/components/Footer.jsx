import React from "react";
import "./Footer.css";

const links = [
  {
    title: "Portfolio",
    href: "#",
  },
  {
    title: "Showcase",
    href: "#",
  },
  {
    title: "Music",
    href: "#",
  },
  {
    title: "Contact",
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
              I make music, art, designs, I'm that guy she tells you not to
              worry about
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
              Instagram
            </a>
            <a href="#" className="footer-social-link">
              LinkedIn
            </a>
          </div>
          <p className="footer-copyright">
            powered by Injera. Made by{" "}
            <a href="https://github.com/NatnaelTaddese" target="_blank">
              NAT
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
