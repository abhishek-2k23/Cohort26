import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://api.freeapi.app/api/v1/public/randomusers";

export default function App() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      if (data.success) {
        setUsers(data.data.data); // nested
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <h1>👤 Project 8</h1>
        <button onClick={fetchUsers}>Refresh</button>
      </header>

      {loading ? (
        <div className="loading">Loading users...</div>
      ) : (
        <>
          {/* PROFILE MODAL */}
          {selected && (
            <div className="modal">
              <div className="modal-content">
                <img src={selected.picture.large} alt="user" />

                <h2>
                  {selected.name.first} {selected.name.last}
                </h2>

                <p>{selected.email}</p>
                <p>{selected.phone}</p>
                <p>{selected.location.country}</p>

                <button onClick={() => setSelected(null)}>
                  Close
                </button>
              </div>
            </div>
          )}

          {/* GRID */}
          <div className="grid">
            {users.map((user, i) => (
              <div
                key={i}
                className="card"
                onClick={() => setSelected(user)}
              >
                <img src={user.picture.medium} alt="user" />

                <div className="card-body">
                  <h3>
                    {user.name.first} {user.name.last}
                  </h3>
                  <p>{user.email}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}