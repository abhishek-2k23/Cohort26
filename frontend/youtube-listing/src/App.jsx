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
      <nav className="navbar">
        <div className="nav-brand">✨ youtube-listing</div>
        <a href="/" className="nav-link">Home</a>
      </nav>
      <main className="main-content">

      {/* HEADER */}
      <header className="header">
        <h1 className="logo">▶ Project 2</h1>
        <h2 className="title">YouTube Clone</h2>
        <div className="profile"></div>
      </header>

      {/* LOADING */}
      {loading ? (
        <div className="loading">Loading videos...</div>
      ) : (
        <div className="grid">
          {videos.map((video) => {
            const v = video.items.snippet;

            return (
              <div className="card" key={video.items.id}>
                <div className="thumbnail-wrapper">
                  <img
                    src={v.thumbnails.high.url}
                    alt="thumbnail"
                    className="thumbnail"
                  />
                </div>

                <div className="card-content">
                  <div className="channel-icon"></div>

                  <div className="video-info">
                    <h3 className="video-title">{v.title}</h3>
                    <p className="channel">{v.channelTitle}</p>
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