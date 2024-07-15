import React, { useState } from 'react';
import './EditModal.css';

const EditModal = ({ isOpen, onClose, onSave }) => {
  const [titulo, setTitulo] = useState(video.titulo);
  const [categoria, setCategoria] = useState(video.categoria);
  const [imagen, setImagen] = useState(video.imagen);
  const [video, setVideo] = useState(video.video);
  const [descripcion, setDescripcion] = useState(video.descripcion);

  const handleSave = () => {
    const updatedCard = { titulo, categoria, imagen, video, descripcion };
    fetch('http://localhost:3001/videos', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedCard)
    }).then(response => response.json());
    onSave();
    onClose();
  };

  const handleClear = () => {
    setTitulo('');
    setCategoria('');
    setImagen('');
    setVideo('');
    setDescripcion('');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Editar Card:</h2>
        <div className="form-group">
          <label>Título</label>
          <input 
            type="text" 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Categoría</label>
          <select 
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="innovación y gestión">Innovación y Gestión</option>
          </select>
        </div>
        <div className="form-group">
          <label>Imagen</label>
          <input 
            type="text" 
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Video</label>
          <input 
            type="text" 
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <textarea 
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button onClick={handleSave}>Guardar</button>
          <button onClick={handleClear}>Limpiar</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
