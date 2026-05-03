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
      {/* HEADER */}
      <header className="header">
        <h1 className="logo">🛒 Project 3</h1>
        <h2 className="title">Product Store</h2>
      </header>

      {/* STATES */}
      {loading && <div className="loading">Loading products...</div>}
      {error && <div className="error">{error}</div>}

      {/* GRID */}
      <div className="grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            {/* IMAGE */}
            <div className="image-wrapper">
              <img
                src={product.thumbnail}
                alt="product"
                className="image"
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
                <span className="rating">⭐ {product.rating}</span>
              </div>

              <button className="btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}