// ProductList.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';  // Import the ProductCard component
import { fetchData } from '../components/GoogleSheetsApi';
// const products = [
//   {
//     id: 1,
//     name: 'Product 1',
//     description: 'Description of Product 1',
//     price: 29.99,
//     image: 'https://www.steelforging.org/wp-content/uploads/2017/12/forging.jpg',
//   },
// ];



const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        setLoading(true);
        const data = await fetchData();
        setProducts(data || []);
      } catch (error) {
        setError(error.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
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
        {products.map((row, index) => (
          <li key={index}>{row.join(', ')}</li>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
