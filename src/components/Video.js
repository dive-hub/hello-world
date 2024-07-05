// src/components/Video.js

import React from 'react';
import './Video.css';

const Video = ({ video }) => {
  return (
    <div className="video-item">
      <div className="video-thumbnail">
        <button className="play-button">&#9658;</button>
      </div>
      <div className="video-details">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
      <button className="like-button">&#x2764;</button>
    </div>
  );
};

export default Video;
