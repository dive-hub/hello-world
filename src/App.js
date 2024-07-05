import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoList from './components/VideoList';

const videos = [
  { id: 1, title: 'First video', description: 'Video description' },
  { id: 2, title: 'Second video', description: 'Video description' },
  { id: 3, title: 'Third video', description: 'Video description' },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <VideoList videos={videos} emptyHeading="No Videos Available" />
        <p>
          Made with ❤️ by Blessed Shammah.
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
