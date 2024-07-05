// src/components/Video.js

import React, { useState, useEffect } from 'react';
import './Video.css';

const Video = ({ video }) => {
  const [liked, setLiked] = useState(() => {
    const saved = localStorage.getItem(`liked-${video.id}`);
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem(`liked-${video.id}`, JSON.stringify(liked));
  }, [liked, video.id]);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="video-item">
      <div className="video-thumbnail">
        <button className="play-button">&#9658;</button>
      </div>
      <div className="video-details">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
      <button 
        className={`like-button ${liked ? 'liked' : ''}`} 
        onClick={toggleLike}
      >
        &#x2764;
      </button>
    </div>
  );
};

export default Video;
