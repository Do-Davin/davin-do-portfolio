import Navbar from './layout/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Featured from './sections/Featured';
import Contact from './sections/Contact';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="pt-24">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Featured />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
