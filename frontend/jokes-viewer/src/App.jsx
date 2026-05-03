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
      <nav className="navbar">
        <div className="nav-brand">✨ jokes-viewer</div>
        <a href="/" className="nav-link">Home</a>
      </nav>
      <main className="main-content">
      {/* HEADER */}
      <header className="header">
        <div className="logo">😂 Project 5</div>
        <button className="refresh-btn" onClick={fetchJokes}>
          🔄 Refresh
        </button>
      </header>

      {/* MAIN */}
      <div className="container">
        {loading ? (
          <p className="loading">Loading jokes...</p>
        ) : (
          joke && (
            <div className="card">
              <p className="punchline">{joke.content}</p>

              {/* NAV BUTTONS */}
              <div className="controls">
                <button onClick={prevJoke}>⬅ Prev</button>
                <button onClick={nextJoke}>Next ➡</button>
              </div>
            </div>
          )
        )}
      </div>
    </main>
    </div>
  );
}