import Header from "../components/UI/Header";
import Hero from "../components/UI//Hero";
import SignUpBox from "../components/UI/SignUpBox";
import Download from "../components/UI//Download";
import Footer from "../components/UI//Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header></Header>
      <Hero>
        <div className="flex-box">
          <SignUpBox></SignUpBox>
          <Download></Download>
        </div>
      </Hero>
      <Footer></Footer>
    </div>
  );
};

export default Home;
