import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://api.freeapi.app/api/v1/public/randomproducts";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      if (data.success) {
        setProducts(data.data.data); // nested structure
      } else {
        setError("Failed to load products");
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="logo-icon">✨</span>
          <span className="logo-text">Product Listing</span>
        </div>
        <a href="/" className="nav-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Home
        </a>
      </nav>

      <main className="main-content">
        {/* HEADER */}
        <header className="header">
          <h1 className="logo">
            <span>🛒</span>
            Project 3
          </h1>
          <h2 className="title">Product Store</h2>
        </header>

        {/* STATES */}
        {loading && (
          <div className="loading">
            <span className="spinner"></span>
            Loading products...
          </div>
        )}
        
        {error && (
          <div className="error">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            {error}
          </div>
        )}

        {/* GRID */}
        {!loading && !error && (
          <div className="grid">
            {products.map((product) => (
              <div className="card" key={product.id}>
                {/* IMAGE */}
                <div className="image-wrapper">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="image"
                    loading="lazy"
                  />
                </div>

                {/* CONTENT */}
                <div className="content">
                  <h3 className="name">{product.title}</h3>

                  <p className="description">
                    {product.description.slice(0, 60)}...
                  </p>

                  <div className="bottom">
                    <span className="price">₹{product.price}</span>
                    <span className="rating">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      {product.rating}
                    </span>
                  </div>

                  <button className="btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}