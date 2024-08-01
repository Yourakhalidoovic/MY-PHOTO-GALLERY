// src/App.js
import React, { useState, useEffect } from "react";
import Gallery from "./Components/Gallery";
import SearchBar from "./Components/SearchBar";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchPhotos = async () => {
      // Replace with your photo fetching logic
      const response = await fetch("https://api.example.com/photos");
      const data = await response.json();
      setPhotos(data);
      setFilteredPhotos(data);
    };
    fetchPhotos();
  }, []);

  const handleSearch = (query) => {
    const filtered = photos.filter((photo) =>
      photo.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPhotos(filtered);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <Gallery photos={filteredPhotos} />
    </div>
  );
};

export default App;
