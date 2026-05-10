import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;