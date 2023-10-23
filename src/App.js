import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from './components/Contact';
import { Testimonials } from './components/Testimonials';
import { AboutUs } from './components/Aboutus';
import { Timeline } from './components/Timeline';




function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />

      <Timeline />
            {/* <AboutUs /> */}
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
