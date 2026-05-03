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

      {/* PROJECT LABEL */}
      <div className="project-label">🚀 Project 1</div>

      {user ? (
        <div className="card profile">
          <h2>Welcome 👋</h2>

          <p><span>Username:</span> {user.username}</p>
          <p><span>Email:</span> {user.email}</p>
          <p><span>Role:</span> {user.role}</p>

          <button className="btn logout" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="card auth">
          <h2>{isLogin ? "Login" : "Register"}</h2>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                placeholder="Email"
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            )}

            <input
              placeholder="Username"
              onChange={(e) =>
                setForm({ ...form, username: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <button className="btn">
              {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
            </button>
          </form>

          {msg && <p className="msg">{msg}</p>}

          <p
            className="toggle"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </p>
        </div>
      )}
    </div>
  );
}