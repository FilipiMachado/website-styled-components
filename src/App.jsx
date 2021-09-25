// Components
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Feature from "./components/Feature/Feature";
import Service from "./components/Service/Service";
import Price from "./components/Price/Price";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// Style
import {
  Container,
  IntroShape,
  FeatureShape,
  ServiceShape,
  PriceShape,
} from "./style";
// Global Config
import "./Global.css";

const App = () => {
  const smallScreen = window.screen.width <= 480 ? true : false;

  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        {!smallScreen && <ServiceShape />}
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

export default App;
