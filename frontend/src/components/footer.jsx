export default function Footer() {
  return (
    <footer style={{
      borderTop: '0.5px solid rgba(255,255,255,0.08)',
      padding: '2rem',
      textAlign: 'center',
      color: 'rgba(232,228,220,0.35)',
      fontSize: '13px',
      fontFamily: 'DM Sans, sans-serif'
    }}>
      <p>Diseñado y desarrollado por <span style={{color: '#c8f064'}}>Rubén Bono</span></p>
      <p style={{marginTop: '6px'}}>
        <a href="https://github.com/RubenBono" target="_blank" rel="noreferrer"
          style={{color: 'rgba(232,228,220,0.35)', textDecoration: 'none', marginRight: '1.5rem'}}>
          GitHub
        </a>
        <a href="https://linkedin.com/in/ruben-bono-carrillo" target="_blank" rel="noreferrer"
          style={{color: 'rgba(232,228,220,0.35)', textDecoration: 'none'}}>
          LinkedIn
        </a>
      </p>
    </footer>
  );
}