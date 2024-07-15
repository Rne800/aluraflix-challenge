import React, { useEffect, useState } from 'react';
import './Home.css';
import Banner from '../components/Banner';
import VideoCard from '../components/VideoCard';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/videos')
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/videos/${id}`, { method: 'DELETE' })
      .then(() => setVideos(videos.filter(video => video.id !== id)));
  };

  const handleEdit = (editedVideo) => {
    fetch(`http://localhost:3001/videos/${editedVideo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedVideo)
    })
      .then(response => response.json())
      .then(updatedVideo => {
        const newVideos = videos.map(video => 
          video.id === updatedVideo.id ? updatedVideo : video
        );
        setVideos(newVideos);
      });
  };

  return (
    <div className="body-home">
      <Banner />
      <div className="video-sections">
        {['Frontend', 'Backend', 'Innovación'].map(category => (
          <div key={category}>
            <h2 className='categoria-card'>{category}</h2>
            {videos.filter(video => video.categoria === category).map(video => (
              <VideoCard
                key={video.id}
                video={video}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
