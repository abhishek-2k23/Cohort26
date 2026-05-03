import { useEffect, useState } from "react";
import "./App.css";

const BASE_URL = "https://api.freeapi.app/api/v1/users";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    role: "ADMIN",
  });

  // 🔹 LOGIN / REGISTER
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const url = isLogin
        ? `${BASE_URL}/login`
        : `${BASE_URL}/register`;

      const payload = isLogin
        ? { username: form.username, password: form.password }
        : form;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        if (isLogin) {
          const { user, accessToken, refreshToken } = data.data;

          // ✅ Store tokens
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("user", JSON.stringify(user));

          setUser(user);
        }

        setMsg(isLogin ? "Login successful 🎉" : "Registered successfully 🎉");
      } else {
        setMsg(data.message || "Something went wrong ❌");
      }
    } catch {
      setMsg("Server error ❌");
    }

    setLoading(false);
  };

  // 🔹 RESTORE USER
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 🔹 LOGOUT
  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="logo-icon">✨</span>
          <span className="logo-text">Auth Flow</span>
        </div>
        <a href="/" className="nav-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Home
        </a>
      </nav>

      <main className="main-content">
        <div className="auth-wrapper">
          {user ? (
            <div className="card profile-card">
              <div className="profile-header">
                <div className="avatar">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <h2>Welcome back!</h2>
              </div>
              
              <div className="profile-details">
                <div className="detail-item">
                  <span className="label">Username</span>
                  <span className="value">{user.username}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Email</span>
                  <span className="value">{user.email}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Role</span>
                  <span className="badge">{user.role}</span>
                </div>
              </div>

              <button className="btn logout-btn" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="card auth-card">
              <div className="card-header">
                <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>
                <p>{isLogin ? "Sign in to continue" : "Sign up to get started"}</p>
              </div>

              <form onSubmit={handleSubmit} className="auth-form">
                {!isLogin && (
                  <div className="input-group">
                    <input
                      type="email"
                      placeholder="Email address"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                    />
                  </div>
                )}

                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Username"
                    value={form.username}
                    onChange={(e) =>
                      setForm({ ...form, username: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="input-group">
                  <input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    required
                  />
                </div>

                <button className="btn submit-btn" disabled={loading}>
                  {loading ? (
                    <span className="spinner"></span>
                  ) : (
                    isLogin ? "Sign In" : "Sign Up"
                  )}
                </button>
              </form>

              {msg && <div className="msg-alert">{msg}</div>}

              <div className="auth-footer">
                <p>
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button type="button" className="text-btn" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Sign up" : "Sign in"}
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}