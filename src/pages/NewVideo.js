import React, { useState } from 'react';
import './NewVideo.css'; // Asegúrate de tener este archivo CSS para los estilos

const NewVideo = () => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState('');
  const [video, setVideo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSave = () => {
    const newVideo = { titulo, categoria, imagen, video, descripcion };
    fetch('http://localhost:3001/videos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newVideo)
    }).then(response => response.json());
  };

  const handleReset = () => {
    setTitulo('');
    setCategoria('');
    setImagen('');
    setVideo('');
    setDescripcion('');
  };

  return (
    <div className="new-video">
      <h1>Nuevo Video</h1>
      <p>Complete el formulario para crear una nueva tarjeta de video</p>
      <form>
        <h2>Crear Tarjeta</h2>
        <div className="form-group">
          <label>Título</label>
          <input 
            type="text" 
            placeholder="ingrese el título" 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Categoría</label>
          <select 
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          >
            <option value="">seleccione una categoría</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Innovación">Innovación</option>
          </select>
        </div>
        <div className="form-group">
          <label>Imagen</label>
          <input 
            type="text" 
            placeholder="ingrese el enlace de la imagen" 
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Video</label>
          <input 
            type="text" 
            placeholder="ingrese el enlace del video" 
            value={video}
            onChange={(e) => setVideo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <textarea 
            placeholder="¿de qué se trata este video?"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div className="buttons">
          <button type="submit" onClick={handleSave}>Guardar</button>
          <button type="button" onClick={handleReset}>Limpiar</button>
        </div>
      </form>
    </div>
  );
};

export default NewVideo;

