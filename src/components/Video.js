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

  // Extract the YouTube video ID
  let videoId = video.link.split('v=')[1];
  const ampersandPosition = videoId.indexOf('&');
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition);
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  return (
    <div className="video-item">
      <a href={video.link} target="_blank" rel="noopener noreferrer" className="video-thumbnail">
        <img src={thumbnailUrl} alt={`${video.title} thumbnail`} className="thumbnail-image" />
      </a>
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
