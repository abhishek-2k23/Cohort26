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
      {/* HEADER */}
      <header className="header">
        <h1>🐱 Project 6</h1>
        <button onClick={fetchCat}>New Cat</button>
      </header>

      {/* MAIN */}
      <div className="container">
        {loading ? (
          <p className="loading">Loading cat...</p>
        ) : (
          cat && (
            <div className="card">

              {/* IMAGE */}
              <img src={cat.image} alt="cat" className="image" />

              {/* INFO */}
              <div className="info">
                <h2>{cat.name}</h2>
                <p className="origin">📍 {cat.origin}</p>

                <p className="desc">{cat.description}</p>

                {/* EXTRA INFO */}
                <div className="meta">
                  <span>🧬 Life: {cat.life_span} yrs</span>
                  <span>⚡ Energy: {cat.energy_level}/5</span>
                  <span>🧠 Intelligence: {cat.intelligence}/5</span>
                </div>

                <p className="temperament">
                  <b>Temperament:</b> {cat.temperament}
                </p>
              </div>

            </div>
          )
        )}
      </div>
    </div>
  );
}