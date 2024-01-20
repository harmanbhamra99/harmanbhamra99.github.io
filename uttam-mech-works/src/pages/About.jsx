import React from "react";
import { Container, Typography, Button, Paper } from "@mui/material";
import aboutImage from "../assets/about.jpeg";
import "./about.css";

const About = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white", // Text color
        }}
      >
        <Container>
          <Typography variant="h2" gutterBottom>
            About Us
          </Typography>
          
        </Container>
      </div>

      <div>
        <div className="container-fluid about-data">
          <div className="row">
            <div className="col-sm">
              <h2 style={{ textAlign: 'center' }}>The Founders</h2>
              <p>
              Established in 2006 by the visionary owner and proprietor, Mr.
              Gurmeet Singh, Uttam Mechanical Works stands as a beacon of
              innovation and quality in the manufacturing industry. With an
              unwavering commitment to excellence, we take pride in being a
              leading manufacturer of various textile machine components, catering
              to diverse industries since our inception.Founded on the principles of dedication, precision, and continuous
                improvement, Uttam Mechanical Works has been at the forefront of
                manufacturing excellence for over a decade. Mr. Gurmeet Singh's
                vision and leadership have shaped our company into a reliable
                partner for clients seeking top-notch precision components.
                
              </p>
            </div>

            <div className="col-sm">
              <img src={aboutImage}/>
            </div>
          </div>
        </div>

        <div className="container-fluid row">
        <div className="col-sm">
          <div className="about-section">
            <h2>In-House Manufacturing Excellence</h2>
            <p>
              Our state-of-the-art facilities enable us to deliver high-quality
              components with precision and efficiency. From cam gears to shafts,
              bushes, and more, every piece undergoes rigorous quality checks,
              ensuring it meets the highest standards before leaving our
              production floor.
            </p>
          </div>
        </div>
        <div className="col-sm">
          <div className="about-section">
            <h2>A Commitment to Quality</h2>
            <p>
              Much like our esteemed partners at Attica CNC machine shop, quality
              is at the core of our business philosophy. We firmly believe that if
              our name is associated with a product, you can trust that it
              contains Uttam Mechanical Works' precision and reliability. Our
              dedication to quality extends from the raw materials we use to the
              finished components we deliver.
            </p>
          </div>
        </div>
        <div className="col-sm">
          <div className="about-section">
            <h2>Diverse Industry Solution</h2>
            <p>
              We are not just manufacturers; we are solution providers. Uttam
              Mechanical Works caters to a spectrum of industries, including
              automotive, agriculture, and hydraulic parts manufacturing. Our CNC
              turning capabilities allow us to craft components tailored to the
              unique needs of each sector.
            </p>
          </div>
        </div>
      </div>

        
        
      </div>
    </>
  );
};

export default About;
