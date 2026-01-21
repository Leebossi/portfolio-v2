import image from "../assets/img/hero.jpg"

const Home = () => {
  return (
    <div id="home">
      <h1>Leevi Ossi</h1>
      <div className="container">
        <div className="image-display">
          <div className="display-title">
            <h2>Software Developer, DIY Dude, Bike Enthusiast</h2>
          </div>
          <div className="hero-image-container">
            <img
              src={image}
              className="hero-img"
              alt="leevi"
            />
            <div className="hero-text">
              <p>
                Hey! I'm Leevi, a passionate software developer with a love for
                creating and making things. When I'm not coding, you can find me
                tinkering with and riding bikes. Welcome to my personal site!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
