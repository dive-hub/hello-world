// src/components/VideoList.js

import React from 'react';
import Video from './Video';
import './VideoList.css';

const VideoList = ({ videos, emptyHeading }) => {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'Videos' : 'Video';
    heading = `${count} ${noun}`;
  }

  return (
    <section className="video-list">
      <h2>{heading}</h2>
      {videos.map(video => (
        <Video key={video.id} video={video} />
      ))}
    </section>
  );
};

export default VideoList;
