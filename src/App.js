import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import ServicesSection, { ServiceCategory } from './components/ServicesSection';
import { Projects } from './components/Projects';
import FAQSection from './components/FAQSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import TestimonialsSection from './components/Testimonials';

// import { AboutUs } from './components/Aboutus';
// import { Timeline } from './components/Timeline';
// import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ServicesSection />
      {/* arreglar proyectos  */}
      <Projects />
      <FAQSection />
      {/* necesitamos refactorizar timeline, que no se llame asi y que sea mas directo  */}
      {/* <Timeline /> */}
      {/* <Skills /> */}
      <TestimonialsSection />

      {/* arreglar el contact form */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
