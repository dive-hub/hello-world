import React from 'react';
import logo from './logo.svg';
import './App.css';

// Example video object
const video = {
  url: 'https://example.com/video',
  title: 'Example Video Title',
  description: 'This is an example description of the video.'
};

// Assuming Thumbnail and LikeButton components are defined elsewhere
const Thumbnail = ({ video }) => (
  <div>
    <img src={video.thumbnail} alt={video.title} />
  </div>
);

const LikeButton = ({ video }) => (
  <button>Like</button>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Thumbnail video={video} />
          <a href={video.url}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </a>
          <LikeButton video={video} />
        </div>
        <p>
          React Js Training whatsapp +254796566475 ASAP.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
