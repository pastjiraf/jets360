import React, { useState, useContext } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';

const AccountManagement = () => {
  const [emailData, setEmailData] = useState({ currentPassword: '', newEmail: '' });
  const [passwordData, setPasswordData] = useState({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
  const { backendUrl } = useContext(ShopContext);
  
  const [message, setMessage] = useState('');

  const handleEmailChange = async (e) => {
    e.preventDefault();
    if (!emailData.currentPassword || !emailData.newEmail) {
      setMessage('Please fill in all email fields.');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(backendUrl + '/api/user/update-email', emailData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error updating email.');
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmNewPassword) {
      setMessage('Please fill in all password fields.');
      return;
    }
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      setMessage('New passwords do not match.');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(backendUrl + '/api/user/update-password', passwordData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error updating password.');
    }
  };

  return (
    <div>
      <h2>Account Management</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleEmailChange}>
        <input
          type="email"
          placeholder="New Email"
          value={emailData.newEmail}
          onChange={(e) => setEmailData({ ...emailData, newEmail: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Current Password"
          value={emailData.currentPassword}
          onChange={(e) => setEmailData({ ...emailData, currentPassword: e.target.value })}
          required
        />
        <button type="submit">Update Email</button>
      </form>
      <form onSubmit={handlePasswordChange}>
        <input
          type="password"
          placeholder="Current Password"
          value={passwordData.currentPassword}
          onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={passwordData.newPassword}
          onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={passwordData.confirmNewPassword}
          onChange={(e) => setPasswordData({ ...passwordData, confirmNewPassword: e.target.value })}
          required
        />
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default AccountManagement;
