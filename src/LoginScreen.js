import React from 'react';
import logoImage from './images/logo.jpeg'; // Replace with the actual path to your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed to use this

const LoginScreen = () => {
  return (
    <div className='about-us-background'>
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <img src={logoImage} alt="UTAFurniFind Logo" className="card-img-top mb-4" style={{ maxWidth: '200px', margin: '0 auto' }} />
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Login</h2>
          <form>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
            <div className="d-flex justify-content-center align-items-center my-3">
              <hr className="w-50" />
              <span className="mx-2">Or Login with</span>
              <hr className="w-50" />
            </div>
            <div className="d-flex justify-content-around mb-4">
              <button type="button" className="btn btn-outline-primary">
                <FontAwesomeIcon icon={faFacebook} />
              </button>
              <button type="button" className="btn btn-outline-danger">
                <FontAwesomeIcon icon={faGoogle} />
              </button>
              <button type="button" className="btn btn-outline-dark">
                <FontAwesomeIcon icon={faApple} />
              </button>
            </div>
          </form>
        </div>
        <div className="card-footer text-center">
          <p>Don’t have an account? <Link to="/SignUpScreen">Sign up</Link></p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginScreen;
