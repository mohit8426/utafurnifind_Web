import React from 'react';
import styles from './StartScreen.css';

import logoImage from './images/logo.jpeg'; // Replace with the path to your logo image


import { Link, useNavigate } from 'react-router-dom';

const StartScreen = () => {
  let navigate = useNavigate();
  return (
    <div className='about-us-background'>
    <div className={`${styles.container} container d-flex justify-content-center align-items-center`}>
      <div className={`${styles.logoContainer} text-center mb-4`}>
        <img src={logoImage} alt="UTA FurniFind Logo" className={`${styles.logo} mb-3`} />
        {/* <h1 className={styles.title}>UTA FurniFind</h1> */}
      </div>
      <div className={`${styles.buttonContainer} w-100`}>
        <button className={`${styles.button} btn btn-primary w-100 mb-2`}onClick={() => navigate('/LoginScreen')}>Login</button>
        <button className={`${styles.button} btn btn-secondary w-100 mb-2`} onClick={() => navigate('/AdminScreen')}>Admin Login</button>
        <button className={`${styles.buttonAccent} btn btn-info w-100`}onClick={() => navigate('/SignUpScreen')}>Create your account</button>
      </div>
      <div className="w-100 text-center mt-4">
        <Link to="/" className="text-decoration-none">{/* Replace with your actual home route */}
          Back to home
        </Link>
      </div>
    </div>
    </div>
  );
};

export default StartScreen;





