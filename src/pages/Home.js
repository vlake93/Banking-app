import Header from "../components/UI/Header";
import Hero from "../components/UI//Hero";
import SignUp from "../components/UI/SignUpBox";
import Download from "../components/UI//Download";
import Footer from "../components/UI//Footer";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Hero>
        <SignUp></SignUp>
        <Download></Download>
      </Hero>
      <Footer></Footer>
    </div>
  );
};

export default Home;
