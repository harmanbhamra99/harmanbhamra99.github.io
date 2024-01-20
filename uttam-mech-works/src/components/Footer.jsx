import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light pt-5">
      <div className="container pb-1 pb-lg-5">
        <div className="row content-space-t-2">
          <div className="col-lg-5 col-md-6 col-12 mb-7 mb-0 order-3 order-md-1">
            <div className="embed-responsive embed-responsive-4by3">
              <iframe
                className="embed-responsive-item"
                width="350"
                height="270"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27391.213938950958!2d75.83165191083982!3d30.8894096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f64ab69a9867f7%3A0x9cec9d1fc910c3d5!2sBhamra%20Mechanical%20Works!5e0!3m2!1sen!2sca!4v1705777570454!5m2!1sen!2sca"
                allowFullScreen
              ></iframe>
            </div>

            <ul className="list-unstyled list-py-1">
              <li>
                <a className="link-sm link-dark" href="#">
                  <i className="bi-geo-alt-fill me-1"></i> 12944, Street No. 16, Near Sangeet Cinema, Vishwakarma Colony, Mller Ganj, Ludhiana, Punjab, 141003, India
                </a>
              </li>
              <li>
                <a className="link-sm link-dark" href="tel:1-062-109-9222">
                  <i className="bi-telephone-inbound-fill me-1"></i> +91 9814064644
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-12 order-1 order-md-2" style={{textAlign:"left"}}>
            {/* Company Section */}
            <h5 className="text-black mb-3">Company</h5>
            <ul className="list-unstyled list-py-1 mb-0">
              <li><Link className="text-decoration-none text-black" to="#">About</Link></li>
              <li><Link className="text-decoration-none text-black" to="#">Our Products </Link></li>
              <li><Link className="text-decoration-none text-black" to="#">Blog</Link></li>
              <li><Link className="text-decoration-none text-black" to="#">Contact</Link></li>
              <li style={{ fontWeight: "bold" }}>Open Hours:</li>
              <li style={{ fontSize: "0.85em" }}>Mon–Sat: 08:00 am to 08:00 pm,</li>
              <li style={{ fontSize: "0.85em" }}>Sun: 8:00 am to 12:00 pm</li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 col-12 order-2 order-md-3">
            {/* Uttam Mechanical Works Section */}
            <h5 className="text-black mb-3" style={{ textAlign: "left" }}>Uttam Mechanical Works</h5>
            <p className="text-dark mb-0">
              Uttam Mechanical Works caters to a spectrum of industries, including automotive,
              agriculture, and hydraulic parts manufacturing. Our CNC turning capabilities allow
              us to craft components tailored to the unique needs of each sector.
              <Link to="/about">About Us</Link>.
            </p>
          </div>
        </div>

        <div className="row mb-7">
          <div className="col-sm-auto mx-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                  <i className="bi-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                  <i className="bi-google"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                  <i className="bi-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                  <i className="bi-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-md-85 text-lg-center mx-lg-auto">
          <p className="text-white-50 small">© 2023 Uttam Mechanical Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;