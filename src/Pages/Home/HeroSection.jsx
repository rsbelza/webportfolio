export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Raymart</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Web Developer</span>{" "}
          </h1>
          <p className="hero--section-description">
            A web developer passionate about seamlessly merging creativity and functionality in digital spaces.
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpg" alt="Hero Section" style={{ borderRadius: '50%' }} />
      </div>
    </section>
  );
}