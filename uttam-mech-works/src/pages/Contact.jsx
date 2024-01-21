import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import aboutImage from '../assets/about.jpeg';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('xleqgrwp');

  if (state.succeeded) {
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
              Thank You!
            </Typography>
            <Typography variant="body1" gutterBottom>
              We appreciate your message. We'll get back to you soon.
            </Typography>
          </Container>
        </div>
      </>
    );
  }

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
          {/* Add other components as needed */}
        </Container>
      </div>

      <div>
        <Container style={{ marginTop: '20px', marginBottom: '20px', textAlign: 'center' }}>
          <Typography variant="h6" align="center" gutterBottom>
            Have any Queries? Get in touch with us.
          </Typography>

          <Typography variant="h4" align="center" gutterBottom>
            Feel free to contact us any time
          </Typography>

          <form method="POST" onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth label="Name" variant="outlined" margin="normal" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  variant="outlined"
                  margin="normal"
                  type="email"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Phone" variant="outlined" margin="normal" name="phone" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Location"
                  variant="outlined"
                  margin="normal"
                  name="location"
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
                  name="message"
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
  );
};

export default Contact;
