// src/components/Gallery.js
import React from "react";
import "./Gallery.css";

const Gallery = ({ photos }) => {
  return (
    <div className="gallery">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo.url}
          alt={photo.title}
          className="gallery-item"
        />
      ))}
    </div>
  );
};

export default Gallery;
