import React from 'react';
import { Container, Grid, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";

const MaterialDetailedFooter = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
<footer className="text-bg-light footer-className">
  <div className="container py-5 py-lg-6">
    <div className="row">
      <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
        {/* Google Maps Section */}
        <iframe
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27391.213938950958!2d75.83165191083982!3d30.8894096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f64ab69a9867f7%3A0x9cec9d1fc910c3d5!2sBhamra%20Mechanical%20Works!5e0!3m2!1sen!2sca!4v1705777570454!5m2!1sen!2sca"          allowFullScreen
        ></iframe>
        
      </div>

      <div className="col-lg-2 col-md-3 col-12 mb-4 mb-lg-0" style={{ textAlign: "center" }}>
        
        <h2 className="h6 mb-3">Official Info</h2>
        <div style={{fontSize:"0.8em"}}>Manufacturing Facility</div>
        <ul className="nav flex-column">
          <li className="mb-1">
            <a href="#" className="link-secondary">Twitter</a>
          </li>
          <li className="mb-1">
            <a href="#" className="link-secondary">Instagram</a>
          </li>
          <li className="mb-1">
            <a href="#" className="link-secondary">Dribbble</a>
          </li>
          <li className="mb-1">
            <a href="#" className="link-secondary">Facebook</a>
          </li>
        </ul>


      </div>

      <div className="col-lg-2 col-md-3 col-12 mb-4 mb-lg-0" style={{ textAlign: "center" }}>
        
        <h2 className="h6 mb-3">Social</h2>
        <ul className="nav flex-column">
          <li className="mb-1">
            <a href="#" className="link-secondary">Twitter</a>
          </li>
          <li className="mb-1">
            <a href="#" className="link-secondary">Instagram</a>
          </li>
          <li className="mb-1">
            <a href="#" className="link-secondary">Dribbble</a>
          </li>
          <li className="mb-1">
            <a href="#" className="link-secondary">Facebook</a>
          </li>
        </ul>
      </div>

      <div className="col-lg-4 col-md-12 col-12">
        <h2 className="h6 mb-3" style={{ textAlign: "center" }}>Uttam Mechanical Works</h2>
        <p className="text-secondary mb-0" >
          Uttam Mechanical Works caters to a spectrum of industries, including automotive,
          agriculture, and hydraulic parts manufacturing. Our CNC turning capabilities allow
          us to craft components tailored to the unique needs of each sector.
          <Link to="/about">About Us</Link>.
        </p>
      </div>
    </div>
  </div>
  <h6 style={{textAlign:"center"}}> &#169; 2023 Uttam Mechanical Works. All rights reserved.</h6>
</footer>

  );
};

export default MaterialDetailedFooter;
