import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/resetpassword.css";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = () => {
    setError('');
    setMessage('');

    if (!newPassword || !confirmPassword) {
      setError('Please fill in both password fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setMessage('Your password has been successfully reset. You can now log in.');
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-card">
        <h1 className="title">Reset Password</h1>
        <p className="subtitle">Enter your new password</p>

        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="input-field"
        />
        <button className="btn" onClick={handleResetPassword}>
          Reset Password
        </button>

        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
