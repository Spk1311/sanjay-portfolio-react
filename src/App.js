import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Navbar from "./Component/Navbar/Navbar";
import Portfolio from './Component/Portfolio/Portfolio';

function App() {
  return (
    <div
      className="main-content">
      <Navbar />
      <Home />
      <About />
      {/* <Services /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
