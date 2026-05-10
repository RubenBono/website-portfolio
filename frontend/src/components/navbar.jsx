import { useState, useEffect } from 'react';
import './navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="logo">Rubén Bono.dev</div>
        <div className="nav-links">
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
          <a href="https://github.com/RubenBono" target="_blank" rel="noreferrer" className="nav-github">
            GitHub ↗
          </a>
        </div>
      </div>
    </nav>
  );
}