import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://api.freeapi.app/api/v1/public/quotes";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [current, setCurrent] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuotes = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      if (data.success) {
        setQuotes(data.data.data);
        setCurrent(data.data.data[0]);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const randomQuote = () => {
    const random =
      quotes[Math.floor(Math.random() * quotes.length)];
    setCurrent(random);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="logo-icon">✨</span>
          <span className="logo-text">Quotes Listing</span>
        </div>
        <a href="/" className="nav-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Home
        </a>
      </nav>

      <main className="main-content">
        {/* HEADER */}
        <header className="header">
          <h1>
            <span>✨</span>
            Project 4
          </h1>
          <p>Quotes Gallery</p>
        </header>

        {/* LOADING */}
        {loading ? (
          <div className="loading">
            <span className="spinner"></span>
            Loading quotes...
          </div>
        ) : (
          <>
            {/* MAIN QUOTE */}
            {current && (
              <div className="quote-box">
                <p className="quote-text">“{current.content}”</p>
                <p className="author">— {current.author}</p>

                <button className="btn" onClick={randomQuote}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
                  New Quote
                </button>
              </div>
            )}

            {/* QUOTE GRID */}
            <div className="grid">
              {quotes.slice(0, 12).map((q) => (
                <div
                  key={q._id}
                  className="card"
                  onClick={() => setCurrent(q)}
                >
                  <p className="card-text">
                    “{q.content.slice(0, 80)}...”
                  </p>
                  <p className="card-author">— {q.author}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}