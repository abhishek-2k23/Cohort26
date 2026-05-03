import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://api.freeapi.app/api/v1/public/youtube/videos";

export default function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVideos = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      if (data.success) {
        setVideos(data.data.data);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="logo-icon">✨</span>
          <span className="logo-text">YouTube Listing</span>
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
            <span>▶</span>
            Project 2
          </h1>
          <h2 className="title">YouTube Clone</h2>
          <div className="profile">U</div>
        </header>

        {/* LOADING */}
        {loading ? (
          <div className="loading">
            <span className="spinner"></span>
            Loading videos...
          </div>
        ) : (
          <div className="grid">
            {videos.map((video) => {
              const v = video.items.snippet;

              return (
                <div className="card" key={video.items.id}>
                  <div className="thumbnail-wrapper">
                    <img
                      src={v.thumbnails.high.url}
                      alt={v.title}
                      className="thumbnail"
                      loading="lazy"
                    />
                  </div>

                  <div className="card-content">
                    <div className="channel-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>

                    <div className="video-info">
                      <h3 className="video-title">{v.title}</h3>
                      <p className="channel">
                        {v.channelTitle}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{marginLeft: '4px', color: '#94a3b8'}}><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="var(--bg-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </p>
                      <p className="date">
                        {new Date(v.publishedAt).toDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}