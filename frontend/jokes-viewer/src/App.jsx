import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://api.freeapi.app/api/v1/public/randomjokes";

export default function App() {
  const [jokes, setJokes] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchJokes = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      if (data.success) {
        setJokes(data.data.data); // array
        setIndex(0);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const nextJoke = () => {
    setIndex((prev) => (prev + 1) % jokes.length);
  };

  const prevJoke = () => {
    setIndex((prev) =>
      prev === 0 ? jokes.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  const joke = jokes[index];

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="logo-icon">✨</span>
          <span className="logo-text">Jokes Viewer</span>
        </div>
        <a href="/" className="nav-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Home
        </a>
      </nav>

      <main className="main-content">
        {/* HEADER */}
        <header className="header">
          <div className="logo">
            <span>😂</span>
            <span>Project 5</span>
          </div>
          <button className="refresh-btn" onClick={fetchJokes} disabled={loading}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            Refresh
          </button>
        </header>

        {/* MAIN */}
        <div className="container">
          {loading ? (
            <div className="loading">
              <span className="spinner"></span>
              Loading jokes...
            </div>
          ) : (
            joke && (
              <div className="card">
                <p className="punchline">{joke.content}</p>

                {/* NAV BUTTONS */}
                <div className="controls">
                  <button onClick={prevJoke}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    Prev
                  </button>
                  <button onClick={nextJoke}>
                    Next
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
}