import React from "react";
import backgroundImage from "../assets/forging.webp"; // Import the background image
import aboutImage from "../assets/about.jpeg";
import "./home.css";
import product1 from "../assets/products/product1.jpg"
import product2 from "../assets/products/product2.jpg"
import product3 from "../assets/products/product3.jpg"
import product4 from "../assets/products/product4.jpg"
import product5 from "../assets/products/product5.jpg"
import product6 from "../assets/products/product6.jpg"
import { Link } from "react-router-dom";

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
          textAlign: "center",
          color: "white",
        }}
      >
        <div>
          <h2>Welcome to Uttam Mechanical Works</h2>
          <h5>Your Trusted Partner in Precision Manufacturing!</h5>
        </div>
      </div>

      <div className="container-fluid general-div">
      <h2 style={{ textAlign: 'center', color: '#333', marginTop: '20px' }}>Our Expertise</h2>
      <p style={{ color: 'black', fontSize: '1.1em', lineHeight: '1.6' }}>
        At Uttam Mechanical Works, our expertise extends beyond textile machine components. Equipped with cutting-edge machinery, including
        lathe machines, automatic nut cutting machines, drilling machines, surface grinders, cylindrical grinders, band saws, and CNC turning
        machines, we've diversified our capabilities. Not only are we specialists in the textile industry, but we've also made significant
        contributions to the automobile, agriculture, and hydraulic parts sectors.
      </p>
    </div>
      
      <div className="container-fluid prod-div">
      <h2>Our Products</h2>
      </div>
      
      <div className="container-fluid pt-2 pb-5 pb-lg-6">
        <ul className="row list-unstyled gx-0 gy-4 mt-n6 px-xl-4">
          <li className="col-sm-6 col-xl-4">
            <figure className="img-scale">
              <div className="img-wrap mb-3">
                <img
                  src={product1}
                  width="800"
                  height="800"
                  className="img-fluid"
                />
              </div>
              <figcaption className="h5 fw-normal">
                <Link className="stretched-link link-body-emphasis" to="/products">
                  Small Hook Shaft 130-K
                </Link>
              </figcaption>
            </figure>
          </li>
          <li className="col-sm-6 col-xl-4">
            <figure className="img-scale">
              <div className="img-wrap mb-3">
                <img
                  src={product2}
                  width="800"
                  height="800"
                  alt="Windowpanes at the building"
                  className="img-fluid"
                />
              </div>
              <figcaption className="h5 fw-normal">
                <Link className="link-body-emphasis stretched-link" to="/products">
                  Arm Shaft 130-K
                </Link>
              </figcaption>
            </figure>
          </li>
          <li className="col-sm-6 col-xl-4">
            <figure className="img-scale">
              <div className="img-wrap mb-3">
                <img
                  src={product3}
                  width="800"
                  height="800"
                  alt="Red wooden house near sea"
                  className="img-fluid"
                />
              </div>
              <figcaption className="h5 fw-normal">
                <Link className="link-body-emphasis stretched-link" to="/products">
                  Hook Shaft Big 130-K
                </Link>
              </figcaption>
            </figure>
          </li>
          <li className="col-sm-6 col-xl-4">
            <figure className="img-scale">
              <div className="img-wrap mb-3">
                <img
                  src={product4}
                  width="800"
                  height="800"
                  alt="High-rise buildings"
                  className="img-fluid"
                />
              </div>
              <figcaption className="h5 fw-normal">
                <Link className="link-body-emphasis stretched-link" to="/products">
                  Hook Shaft Bush
                </Link>
              </figcaption>
            </figure>
          </li>
          <li className="col-sm-6 col-xl-4">
            <figure className="img-scale">
              <div className="img-wrap mb-3">
                <img
                  src={product5}
                  width="800"
                  height="800"
                  alt="White concrete house near green tree"
                  className="img-fluid"
                />
              </div>
              <figcaption className="h5 fw-normal">
                <Link className="link-body-emphasis stretched-link" to="/products">
                  Part-Small Cam
                </Link>
              </figcaption>
            </figure>
          </li>
          <li className="col-sm-6 col-xl-4">
            <figure className="img-scale">
              <div className="img-wrap mb-3">
                <img
                  src={product6}
                  width="800"
                  height="800"
                  alt="White modern building"
                  className="img-fluid"
                />
              </div>
              <figcaption className="h5 fw-normal">
                <Link className="link-body-emphasis stretched-link" to="/products">
                  Big Cam
                </Link>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
