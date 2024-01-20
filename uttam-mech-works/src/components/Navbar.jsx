import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./nav.css"

const Navbar = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Check the window width and set the state accordingly
      setIsNavbarCollapsed(window.innerWidth <= 768);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar navbar-dark navbar-scroll navbar-expand-lg company-navbar" aria-label="Main">
      <div className="container">
        <Link className="navbar-brand d-inline-flex text-uppercase" to="/">
          UMW <i className="material-icons ms-2" aria-hidden="true">donut_large</i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded={!isNavbarCollapsed}
          aria-label="Toggle navigation"
          onClick={() => setIsNavbarCollapsed(!isNavbarCollapsed)}
        >
          <i className="material-icons icon-2x" aria-hidden="true">menu</i>
        </button>
        <div className={`collapse navbar-collapse text-uppercase ${isNavbarCollapsed ? '' : 'show'}`} id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
