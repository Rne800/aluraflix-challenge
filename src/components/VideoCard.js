import React, { useState } from 'react';
import './VideoCard.css';
import EditModal from './EditModal';

const VideoCard = ({ video, onDelete, onEdit }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleDelete = () => {
    onDelete(video.id);
  };

  const handleEdit = () => {
    setShowEditModal(true);
  };

  return (
    <div className="video-card">
      <a href={video.video} target="_blank" rel="noopener noreferrer">
        <img src={video.imagen} alt={video.titulo} className="video-image" />
      </a>
      <div className="video-info">
        <h3>{video.titulo}</h3>
        <p>{video.descripcion}</p>
      </div>
      <div className="video-actions">
        <button onClick={handleDelete} className="delete-button">
          <i className="fas fa-trash-alt"></i> BORRAR
        </button>
        <button onClick={handleEdit} className="edit-button">
          <i className="fas fa-edit"></i> EDITAR
        </button>
      </div>
      {showEditModal && (
        <EditModal
          video={video}
          onClose={() => setShowEditModal(false)}
          onSave={onEdit}
        />
      )}
    </div>
  );
};

export default VideoCard;

