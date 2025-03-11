import "./Section.css";

export default function Section({ children, background }) {
  const sectionStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundAttachment: "fixed", // Optional: creates parallax effect
  };

  return (
    <section style={sectionStyle} className="Section">
      {children}
    </section>
  );
}
