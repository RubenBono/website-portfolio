import { useState, useEffect } from 'react';
import axios from 'axios';
import './projects.css';

const datosEjemplo = [
  {
    _id: '1',
    titulo: 'Dashboard Maquinaria Portuaria',
    descripcion: 'Análisis de aciertos y errores de grúas Ship-to-Shore mediante Power BI y SQL.',
    tecnologias: ['Power BI', 'SQL', 'Excel'],
    github: 'https://github.com/RubenBono/dashboard-maquinaria-portuaria',
    destacado: false
  },
  {
    _id: '2',
    titulo: 'Automatización de Facturas',
    descripcion: 'Extracción automática de facturas con macros VBA y flujos de Power Automate.',
    tecnologias: ['VBA', 'Power Automate', 'Excel'],
    github: 'https://github.com/RubenBono/automatizacion-facturas-vba-powerautomate',
    destacado: false
  },
  {
    _id: '3',
    titulo: 'Simulación Pilas Contenedores',
    descripcion: 'Sistema semiautomático de gestión de pilas de contenedores portuarios.',
    tecnologias: ['Excel', 'VBA', 'Power BI'],
    github: 'https://github.com/RubenBono/simulacion-pilas-contenedores-vba',
    destacado: false
  },
  {
  _id: '4',
  titulo: 'Portfolio Web',
  descripcion: 'Portfolio web personal desarrollado con React, Node.js y MongoDB.',
  tecnologias: ['React', 'Node.js', 'MongoDB'],
  github: 'https://github.com/RubenBono/website-portfolio',
  destacado: false
  }
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(res => {
        if (res.data.length === 0) {
          setProjects(datosEjemplo);
        } else {
          setProjects(res.data);
        }
      })
      .catch(() => {
        setProjects(datosEjemplo);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects">
      <p className="section-label">Proyectos</p>
      <h2>Lo que he construido</h2>
      {loading ? (
        <p style={{ color: 'var(--text-muted)' }}>Cargando proyectos...</p>
      ) : (
        <div className="projects-grid">
          {projects.map(p => (
            <div key={p._id} className={`project-card ${p.destacado ? 'featured' : ''}`}>
              <div className="project-header">
                <h3>{p.titulo}</h3>
                {p.destacado && <span className="badge">Destacado</span>}
              </div>
              <p>{p.descripcion}</p>
              <div className="project-tags">
                {p.tecnologias.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}