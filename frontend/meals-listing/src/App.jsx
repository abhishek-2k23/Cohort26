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
      <nav className="navbar">
        <div className="nav-brand">✨ meals-listing</div>
        <a href="/" className="nav-link">Home</a>
      </nav>
      <main className="main-content">
      {/* HEADER */}
      <header className="header">
        <h1>🍽️ Project 7</h1>
        <p>Meals & Recipes</p>
      </header>

      {loading ? (
        <div className="loading">Loading meals...</div>
      ) : (
        <>
          {/* DETAIL VIEW */}
          {selectedMeal && (
            <div className="modal">
              <div className="modal-content">
                <img
                  src={selectedMeal.strMealThumb}
                  alt="meal"
                />

                <h2>{selectedMeal.strMeal}</h2>
                <p className="category">
                  {selectedMeal.strCategory}
                </p>

                <p className="instructions">
                  {selectedMeal.strInstructions.slice(0, 200)}...
                </p>

                <button onClick={() => setSelectedMeal(null)}>
                  Close
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
                <img src={meal.strMealThumb} alt="meal" />

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