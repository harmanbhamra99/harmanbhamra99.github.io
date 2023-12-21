import React from 'react'
import { Container, Typography, Button, Paper } from '@mui/material';
import aboutImage from '../assets/about.jpeg';

const About = () => {
  return (
    <div
        style={{
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white', // Text color
        }}
      >
        <Container>
          <Typography variant="h2" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
          </Typography>
          {/* Add other components as needed */}
        </Container>
    </div>
  );
}

export default About