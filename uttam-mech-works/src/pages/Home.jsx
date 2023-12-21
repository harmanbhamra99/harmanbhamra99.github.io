import React from 'react';
import { Container, Typography } from '@mui/material';
import backgroundImage from '../assets/forging.webp'; // Import the background image


const Home = () => {
    return (
        <>
        <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white', // Text color
        }}
      >
        <Container>
          <Typography variant="h2" gutterBottom>
            Welcome to Our Website
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
          </Typography>
          {/* Add other components as needed */}
        </Container>
      </div>
        </>
      
    );
  };
  
  export default Home;
  