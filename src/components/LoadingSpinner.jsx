import React from 'react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';

const LoadingSpinner = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.8)', // Adjust background color and opacity
    zIndex: 999, // Ensure it appears on top of other elements
  };

  return (
    <div style={containerStyle}>
      <RingLoader color="#36D7B7" css={override} size={150} />
    </div>
  );
};

export default LoadingSpinner;
