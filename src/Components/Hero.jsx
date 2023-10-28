import "./Hero.css";
import img from "../../public/hero-img.webp";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Hello! What would you like to buy?</h1>
        <p>
          Search between millions of products from hundreds different online
          shops. Our price comparison service helps you find the best deal on
          the market.
        </p>
        <button className="button">Hover me</button>
      </div>
      <div className="hero-img">
        <img src={img} alt="Hero Image" className="img" />
      </div>
    </section>
  );
};
export default Hero;
