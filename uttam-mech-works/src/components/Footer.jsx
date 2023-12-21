import React from 'react';
import { Container, Grid, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const MaterialDetailedFooter = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
        {/* Your main content goes here */}
      </div>
      <footer style={{ backgroundColor: '#f8f9fa', padding: '20px 0', marginTop: 'auto' }}>
        <Container maxWidth="md">
          <Grid container spacing={isMobile ? 2 : 4}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Typography>
                <EmailIcon /> your.email@example.com
              </Typography>
              <Typography>Phone: +123 456 7890</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <IconButton
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                <LinkedInIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                About Us
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                ante dapibus diam.
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '20px' }}>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

export default MaterialDetailedFooter;
