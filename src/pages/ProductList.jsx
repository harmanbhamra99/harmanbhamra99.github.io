import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import FetchCSVData from '../components/GoogleSheetsApi';
import Papa from 'papaparse';
import LoadingSpinner from '../components/LoadingSpinner';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchDataAsync = async () => {
          try {
              setLoading(true);
              const csvData = await FetchCSVData();
  
              const parseResult = await new Promise((resolve, reject) => {
                  Papa.parse(csvData, {
                      header: true,
                      complete: function (result) {
                          resolve(result.data);
                      },
                      error: function (error) {
                          reject(error.message);
                      },
                  });
              });

              setProducts(parseResult);
          } catch (error) {
              console.error('Error fetching/parsing data:', error);
              setError('An error occurred while fetching/parsing the data');
          } finally {
              setLoading(false);
          }
      };
  
      fetchDataAsync();
  }, []); // Empty dependency array to run the effect only once on mount
  


    if (loading) {
        return <LoadingSpinner />; 
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
      <Container>
      <Typography variant="h4" align="center" gutterBottom>
          Our Products
      </Typography>
      <Grid container spacing={2}>
          {products.map((product) => (
              
            <>
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
            </>
            
          ))}
      </Grid>
  </Container>
    );
};

export default ProductList;
