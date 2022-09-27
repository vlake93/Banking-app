import Header from "../components/UI/Header";
import Hero from "../components/UI//Hero";
import SignUpBox from "../components/UI/SignUpBox";
import Download from "../components/UI//Download";
import Footer from "../components/UI//Footer";
import Login from "../components/UI/Login";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Hero>
        <div className="flex-box">
          <SignUpBox></SignUpBox>
          <Download></Download>
        </div>
        <Login></Login>
      </Hero>
      <Footer></Footer>
    </div>
  );
};

export default Home;
