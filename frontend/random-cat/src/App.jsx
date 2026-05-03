import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://api.freeapi.app/api/v1/public/cats/cat/random";

export default function App() {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCat = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      if (data.success) {
        setCat(data.data); // ✅ correct
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="logo-icon">✨</span>
          <span className="logo-text">Random Cat</span>
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
            <span>🐱</span>
            Project 6
          </h1>
          <button onClick={fetchCat} disabled={loading}>
            {loading ? (
              <span className="spinner spinner-small"></span>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
            )}
            New Cat
          </button>
        </header>

        {/* MAIN */}
        <div className="container">
          {loading ? (
            <div className="loading">
              <span className="spinner"></span>
              Summoning a cat...
            </div>
          ) : (
            cat && (
              <div className="card">
                {/* IMAGE */}
                <div className="image-container">
                  <img src={cat.image} alt={cat.name} className="image" />
                </div>

                {/* INFO */}
                <div className="info">
                  <h2>{cat.name}</h2>
                  <p className="origin">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {cat.origin}
                  </p>

                  <p className="desc">{cat.description}</p>

                  {/* EXTRA INFO */}
                  <div className="meta">
                    <span>
                      <b>Life Span</b>
                      {cat.life_span} yrs
                    </span>
                    <span>
                      <b>Energy</b>
                      {cat.energy_level} / 5
                    </span>
                    <span>
                      <b>Intelligence</b>
                      {cat.intelligence} / 5
                    </span>
                  </div>

                  <p className="temperament">
                    <b>Temperament:</b> {cat.temperament}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
}