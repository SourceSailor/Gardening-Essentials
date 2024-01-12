import GrassSharpIcon from "@mui/icons-material/GrassSharp";

export default function HeroSection() {
  return (
    <section>
      <GrassSharpIcon
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
          fontSize: "80px",
          color: "white",
        }}
      />
      <h1
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
        className="fw-bold"
      >
        Gardening Essentials
      </h1>
    </section>
  );
}
