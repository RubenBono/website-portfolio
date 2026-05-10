import { useState } from 'react';
import axios from 'axios';
import './contact.css';

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      setStatus('ok');
      setForm({ nombre: '', email: '', mensaje: '' });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <p className="section-label">Contacto</p>
      <h2>¿Hablamos?</h2>
      <p className="contact-subtitle">
        Abierto a oportunidades en IT y desarrollo.
        Escríbeme.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Mensaje</label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="Cuéntame sobre la oportunidad..."
            rows={5}
            required
          />
        </div>
        <button type="submit" className="btn-main" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar mensaje →'}
        </button>
        {status === 'ok' && (
          <p className="form-success">¡Mensaje enviado!.</p>
        )}
        {status === 'error' && (
          <p className="form-error">Algo salió mal. Inténtelo de nuevo.</p>
        )}
      </form>
    </section>
  );
}