import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    transform: hovered ? 'scale(1.1)' : 'scale(1)',
  };

  const imageStyle = {
    width: '100%',
    height: '250px', // Set a fixed height for all images
    display: 'block',
    transition: 'transform 0.3s ease',
  };

  return (
    <div
      style={cardStyle}
      className="product-card"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <Link to="/contact">
        <img
          src={product.Image}
          alt={product.Name}
          className="product-image"
          style={imageStyle}
        />
      </Link>
      <div className="product-details">
        <h6 className="product-name">{product.Name}</h6>
      </div>
    </div>
  );
};

export default ProductCard;
