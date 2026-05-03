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

      {/* HEADER */}
      <header className="header">
        <h1>✨ Project 4</h1>
        <p>Quotes Gallery</p>
      </header>

      {/* LOADING */}
      {loading ? (
        <div className="loading">Loading quotes...</div>
      ) : (
        <>
          {/* MAIN QUOTE */}
          {current && (
            <div className="quote-box">
              <p className="quote-text">“{current.content}”</p>
              <p className="author">— {current.author}</p>

              <button className="btn" onClick={randomQuote}>
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
    </div>
  );
}