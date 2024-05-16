import "./App.css";
import logo from "./assets/logo.png";
import herobanner from "./assets/herobanner.jpg";
import about from "./assets/about.jpg";
import taxiClassic from "./assets/taxi-classic.jpg";
import taxiX from "./assets/taxi-x.jpg";
import taxiXL from "./assets/taxi-xl.jpg";
function App() {
  return (
    <>
      {/* <!-- Header starts --> */}
      <header>
        <nav className="navbar">
          {/* <!-- Logo --> */}
          <img src={logo} alt="logo" />

          {/* <!-- Nav Link starts --> */}
          <ul className="navlink">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">AboutUs</a>
            </li>
          </ul>
          {/* <!-- Nav Link ends --> */}
        </nav>

        {/* <!-- Hero Section --> */}
        <div className="herobanner">
          {/* <!-- Left side --> */}
          <div className="herobanner_left">
            {/* <!-- Title --> */}
            <h1>Hired Taxi Driver</h1>
            {/* <!-- Description --> */}
            <p>
              Experience the ultimate comfort and reliability with our
              <span>trusted taxi service</span> tailored just for you.
            </p>
            {/* <!-- Buttons --> */}
            <div className="buttons">
              <button className="button1">Learn More</button>
              <button className="button2">Find a taxi</button>
            </div>
          </div>
          {/* <!-- Right side --> */}
          <div className="herobanner_right">
            {/* <!-- Right side Hero-Banner Image --> */}
            <img src={herobanner} alt="herobanner" />
          </div>
        </div>
      </header>
      {/* <!-- Header ends --> */}

      {/* <!-- Services section starts --> */}
      <section className="services">
        {/* <!-- Title --> */}
        <h1 className="services_heading">Our Best Services</h1>
        {/* <!-- Description --> */}
        <p className="services_heading">
          Reliable and Convenient Taxi Services At your DoorStep
        </p>
        {/* <!-- Mutiple Services image --> */}
        <div className="imageCollection">
          <div className="imageContainer">
            <img src={taxiClassic} alt="taxi-classic" />
            <h1 className="image_details">Classic Taxi</h1>
            <p className="image_paragraph">
              Basic payment, standard comfort taxi service for economical travel
              within the city.
            </p>
          </div>
          <div className="imageContainer">
            <img src={taxiX} alt="taxi-x" />
            <h1 className="image_details">X Taxi</h1>
            <p className="image_paragraph">
              Premium car service offering enhanced comfort and amenities for a
              luxurious transportation experience.
            </p>
          </div>
          <div className="imageContainer">
            <img src={taxiXL} alt="taxi-xl" />
            <h1 className="image_details">Xl Taxi</h1>
            <p className="image_paragraph">
              Spacious SUV taxi providing extra comfort and room, suitable for
              larger groups or longer journeys.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Services section ends --> */}

      {/* <!-- About section starts --> */}
      <section className="about">
        {/* <!-- About Image part --> */}
        <div className="aboutImgContainer">
          <img src={about} alt="about" />
        </div>
        {/* <!-- About Text part --> */}
        <div className="aboutTextContainer">
          <h3>About Us</h3>
          <h1>
            Our Story: Crafting Exceptional Journeys with Unmatched Comfort and
            Care.
          </h1>
          <p className="aboutTextContainerParagraph">
            Premier transportation provider delivering unparalleled comfort,
            reliability, and personalized service to exceed your expectations
            every time.
          </p>
          <button className="aboutButton">Read More</button>
        </div>
      </section>
      {/* <!-- About section ends --> */}

      {/* <!-- Footer --> */}
      <footer className="footer">
        <h1>CopyRight By Faiyaj Bin Ahmed</h1>
      </footer>
    </>
  );
}

export default App;
