import React from 'react';
import logoImage from './images/logo.jpeg'; // Replace with the actual path to your logo image
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed to use this

const AdminLoginScreen = () => {
  return (
    <div className='about-us-background'>
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <img src={logoImage} alt="UTAFurniFind Admin Logo" className="card-img-top mb-4" style={{ maxWidth: '200px', margin: '0 auto' }} />
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Admin Login</h2>
          <form>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Admin Email" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Admin Password" />
            </div>
            <button type="submit" className="btn btn-secondary w-100 mb-3">Admin Login</button>
          </form>
        </div>
        <div className="card-footer text-center">
          <Link to="/LoginScreen" className="text-decoration-none">&larr; Back to user login</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminLoginScreen;
