import Header from "../components/UI/Header";
import Hero from "../components/UI//Hero";
import SignUpBox from "../components/UI/SignUpBox";
import Download from "../components/UI//Download";
import Footer from "../components/UI//Footer";
import "./Home.css";

const Home = () => {
  let users = [
    {
      email: "test@test.com",
      username: "vic",
      password: "user",
      balance: 1000,
    },
    {
      email: "test@test.com",
      username: "shai",
      password: "user",
      balance: 0,
    },
  ];

  if (localStorage.getItem("localRegisteredUsers") === null || undefined) {
    localStorage.setItem("localRegisteredUsers", JSON.stringify(users));
  }

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
