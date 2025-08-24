import ButtonGradient from "./assets/svg/ButtonGradient";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";
import Packages from "./components/Packages";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Title />
        <About />
        <Packages />
        <Experience />
        <Portfolio />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
