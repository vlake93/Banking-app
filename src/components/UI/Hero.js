import "./Hero.css";

function Hero(props) {
  return <div className="hero">{props.children}</div>;
}

export default Hero;
