import React from 'react'
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import aboutImage from '../assets/about.jpeg';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
      };
  return (
    <>
    
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
            Contact Us
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
          </Typography>
          {/* Add other components as needed */}
        </Container>
    </div>

    <div>
        <Container>
      <Typography variant="h6" align="center" gutterBottom>
        Have any Queries? Feel free to get in touch with us.
      </Typography>

      <Typography variant="h4" align="center" gutterBottom>
        Feel free to contact us any time
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Location"
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              multiline
              rows={4}
              label="Your Message"
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
    </div>
    </>
  )
}

export default Contact