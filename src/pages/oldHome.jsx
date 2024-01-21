import React from "react";
import { Container, Typography } from "@mui/material";
import backgroundImage from "../assets/forging.webp"; // Import the background image
import aboutImage from "../assets/about.jpeg";

const Home = () => {
  return (
    <>
    
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white", // Text color
        }}
      >
        <Container>
          <Typography variant="h2" gutterBottom>
            Welcome to Uttam Mechanical Works
          </Typography>
          <Typography variant="h5">
            Your Trusted Partner in Precision Manufacturing!
          </Typography>
        </Container>
      </div>
      <div className="container-fluid about-data">
        <div className="container-fluid">
        <h2>Our Expertise</h2>
        <p>
          At Uttam Mechanical Works, our expertise extends beyond textile
          machine components. Equipped with cutting-edge machinery, including
          lathe machines, automatic nut cutting machines, drilling machines,
          surface grinders, cylindrical grinders, band saws, and CNC turning
          machines, we've diversified our capabilities. Not only are we
          specialists in the textile industry, but we've also made significant
          contributions to the automobile, agriculture, and hydraulic parts
          sectors.
        </p>
        </div>

        <div className="constainer-fluid">
          <img src={aboutImage} />
        </div>
      </div>
    </>
  );
};

export default Home;
