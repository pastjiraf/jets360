import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 
import { useTranslation } from 'react-i18next';


const ResetPassword = () => {
  const { token } = useParams(); // Get the token from the URL (e.g., /reset-password/:token)
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { t } = useTranslation();
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`${backendUrl}/api/user/reset-password`, {
        token,
        password,
      });
      if (response.data.success) {
        toast.success('Password reset successfully');
        navigate('/login');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      toast.error('Server error');
    }
  };

  return (
    <div className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <h2>{t('resetPassword')}</h2>
      <form className='flex flex-col align-items-center' onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t('newPassword')}
          className='w-full px-3 py-2 border border-gray-800'
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder={t('confirmPassword')}
          className='w-full px-3 py-2 border border-gray-800 mt-4'
          required
        />
        <button type="submit" className='bg-black text-white px-8 py-2 mt-4'>
        {t('resetPassword')}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;