import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Team from "./components/Team";
import Events from "./components/Events";
import Startups from "./components/Startups";
import Incubators from "./components/Incubators";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Team/>
      <Events/>
      <Startups/>
      <Incubators/>
      <Contact/>
      <SocialLinks/>
      <Footer/>
    </div>
  );
}

export default App;
