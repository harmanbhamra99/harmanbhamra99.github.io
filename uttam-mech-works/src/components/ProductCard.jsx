// ProductCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';


const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.image}  // Replace with your product image URL
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="textSecondary">{product.description}</Typography>
        <Typography variant="h6">${product.price}</Typography>
        <Button variant="contained" color="primary">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
