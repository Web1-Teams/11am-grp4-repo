import React, { useState } from 'react';
import users from "../data/users.json"; // Importing user data
import "../styles/forgetpassword.css"; // Importing CSS

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePasswordReset = () => {
    setError('');
    setMessage('');

    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    const user = users.find((user) => user.email === email.trim()); // Check if email exists in users.json

    if (user) {
      setMessage(`Instructions have been sent to ${email.trim()}`);
    } else {
      setError('Email not found. Please check and try again.');
    }
  };

  return (
    <div className="password-reset-container">
      <div className="password-reset-card">
        <h1 className="title">Forgot Password</h1>
        <p className="subtitle">Enter your email to reset your password</p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <button className="btn" onClick={handlePasswordReset}>
          Send Link Reset Password
        </button>
        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}
      </div>
    </div>
  );
};

export default ForgetPassword;
