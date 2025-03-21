import "./Section.css";

export default function Section({ children, background, customStyles, id }) {
  const sectionStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundAttachment: "fixed", // Optional: creates parallax effect
    ...customStyles,
  };

  return (
    <section id={id} style={sectionStyle} className="Section">
      {children}
    </section>
  );
}
