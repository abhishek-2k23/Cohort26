import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://api.freeapi.app/api/v1/public/meals";

export default function App() {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMeals = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      if (data.success) {
        setMeals(data.data.data); // nested
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="logo-icon">✨</span>
          <span className="logo-text">Meals Listing</span>
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
            <span>🍽️</span>
            Project 7
          </h1>
          <p>Meals & Recipes</p>
        </header>

        {loading ? (
          <div className="loading">
            <span className="spinner"></span>
            Loading meals...
          </div>
        ) : (
          <>
            {/* DETAIL VIEW / MODAL */}
            {selectedMeal && (
              <div className="modal" onClick={() => setSelectedMeal(null)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <img
                    src={selectedMeal.strMealThumb}
                    alt={selectedMeal.strMeal}
                  />

                  <h2>{selectedMeal.strMeal}</h2>
                  <div className="category">
                    {selectedMeal.strCategory}
                  </div>

                  <div className="instructions">
                    {selectedMeal.strInstructions.slice(0, 300)}...
                  </div>

                  <button onClick={() => setSelectedMeal(null)}>
                    Close Recipe
                  </button>
                </div>
              </div>
            )}

            {/* GRID */}
            <div className="grid">
              {meals.map((meal) => (
                <div
                  key={meal.idMeal}
                  className="card"
                  onClick={() => setSelectedMeal(meal)}
                >
                  <div className="img-container">
                    <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
                  </div>

                  <div className="card-body">
                    <h3>{meal.strMeal}</h3>
                    <p>{meal.strCategory}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}