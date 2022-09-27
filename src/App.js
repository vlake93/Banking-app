import Header from "./components/UI/Header";
import Hero from "./components/UI/Hero";
import SignUp from "./components/UI/SignUp";
import Download from "./components/UI/Download";
import Footer from "./components/UI/Footer";
import SignUpModal from "./components/Modals/SignUpModal";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>
      <Hero>
        <SignUp></SignUp>
        <Download></Download>
      </Hero>
      <Footer></Footer>
      {/* <SignUpModal></SignUpModal> */}
    </div>
  );
}

export default App;
