import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [transcript, setTranscript] = useState([]);
  const [search, setSearch] = useState('');
  const videoRef = useRef();

  useEffect(() => {
    fetch('http://localhost:5000/transcript')
      .then(res => res.json())
      .then(data => setTranscript(data.words));
  }, []);

  const handleWordClick = (time) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      videoRef.current.play();
    }
  };

  const filteredWords = transcript.filter(w =>
    w.word.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <div className="video-container fade-in">
        <video ref={videoRef} controls className="video-player">
          <source src="http://localhost:5000/video" type="video/mp4" />
        </video>

        <input
          className="search-box fade-in"
          placeholder="🔍 Search a word..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {search.trim() !== '' && (
        <ul className="transcript-list fade-in-slow">
          {filteredWords.map((w, i) => (
            <li key={i}>
              <button className="word-button" onClick={() => handleWordClick(w.start)}>
                {w.word} <span className="timestamp">({w.start.toFixed(2)}s)</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
