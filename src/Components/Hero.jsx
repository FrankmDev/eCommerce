import "./Hero.css";
import img from "../../public/hero-img.webp";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Hello! What would you like to buy?</h1>
        <p>
          Search between millions of products from hundreds different <br></br>
          online shops. Our price comparison service helps you find the
          <br></br> best deal on the market.
        </p>
        <button className="cta-btn">Shop now</button>
      </div>
      <div className="hero-img">
        <img src={img} alt="Hero Image" className="img" />
      </div>
    </section>
  );
};
export default Hero;
