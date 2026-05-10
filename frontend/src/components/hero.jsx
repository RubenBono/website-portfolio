import './hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-tag">
          <span className="dot"></span>
          Disponible para trabajar
        </div>
        <h1>
          Técnico IT &<br />
          <em>Desarrollador</em><br />
        </h1>
        <p>
          Desarrollador en en simulaciones, automatización, análisis de datos y desarrollo web.
          Experiencia real en entornos con SAP, Power BI y VBA.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-main">Ver proyectos</a>
          <a href="/CV_Ruben_Bono_Carrillo.pdf" className="btn-ghost" download>
            Descargar CV
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-n">3+</span>
            <span className="stat-l">Proyectos</span>
          </div>
          <div className="stat">
            <span className="stat-n">Administración de Sistemas Informáticos en Red</span>
            <span className="stat-l">FP de Grado Superior</span>
          </div>
          <div className="stat">
            <span className="stat-n">B1+</span>
            <span className="stat-l">Inglés Cambridge</span>
          </div>
        </div>
      </div>
      <div className="hero-avatar">RB</div>
    </section>
  );
}