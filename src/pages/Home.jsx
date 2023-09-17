import LoginForm from "../components/LoginForm";
import NavBar from "../components/NavBar";
import "./Home.css";

import roundedRect from "../assets/roundedRect.svg";
import bgImg from "../assets/images/bg.jpg";
import logoImg from "../assets/images/logo.png";

const Home = () => {
  return (
    <div className="main-container">
      <NavBar />
      <div className="form-logo-container">
        {/* <img className="logo-img" alt="" src="/rectangle-3@2x.png" /> */}
        <img className="logo-img" alt="" src={logoImg} />
        <LoginForm />
      </div>

      <section className="main-bg-container">
        <div className="image-container">
          <img className="bgImg" src={bgImg} alt="" />
        </div>
      </section>
      {/* <section className="main-container-inner"></section> */}

      {/* <section className="main-bg-container">
        <div className="image-container">
          <img className="bgImg" src={bgImg} alt="" />
        </div>
      </section> */}
      {/* <img className="shape" src={roundedRect} alt="shape" /> */}
    </div>
  );
};

export default Home;
