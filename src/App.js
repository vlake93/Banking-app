import Header from "./components/UI/Header";
import Hero from "./components/UI/Hero";
import SignUp from "./components/UI/SignUp";
import Download from "./components/UI/Download";
import SignUpModal from "./components/Modals/SignUpModal";
import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>
      <Hero>
        <SignUp></SignUp>
        <Download></Download>
      </Hero>
      {/* <SignUpModal></SignUpModal> */}
    </div>
  );
}

export default App;
