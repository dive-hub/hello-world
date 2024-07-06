import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoList from './components/VideoList';

const videos = [
  { id: 1, title: 'CodeWithChris', description: 'Swift Programming Tutorial for Beginners (Full Tutorial)', link: 'https://www.youtube.com/watch?v=Ulp1Kimblg0&ab_channel=CodeWithChris' },
  { id: 2, title: 'FreeCodeCamp', description: 'Data Analysis with Python for Excel Users - Full Course', link: 'https://www.youtube.com/watch?v=WcDaZ67TVRo&ab_channel=freeCodeCamp.org' },
  { id: 3, title: 'MIT', description: 'Lecture 1: Introduction to CS and Programming Using Python', link: 'https://www.youtube.com/watch?v=xAcTmDO6NTI&ab_channel=MITOpenCourseWare' },
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
