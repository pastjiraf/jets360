import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AccountManagement = () => {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState({ name: '', email: '' });
  const [emailData, setEmailData] = useState({ currentPassword: '', newEmail: '' });
  const [passwordData, setPasswordData] = useState({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
  const { backendUrl } = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const response = await axios.get(`${backendUrl}/api/user/profile`, {
          headers: { token: token },
        });
        if (response.data.success) {
          setUser(response.data.user);
        } else {
          toast.error(t(response.data.message));
          navigate('/login');
        }
      } catch (error) {
        toast.error(t('errorFetchingProfile'));
        navigate('/login');
      }
    };
    fetchProfile();
  }, [backendUrl, navigate, t]);

  const handleEmailChange = async (e) => {
    e.preventDefault();
    if (!emailData.currentPassword || !emailData.newEmail) {
      toast.error(t('fillAllFieldsEmail'));
      return;
    }
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${backendUrl}/api/user/update-email`,
        emailData,
        { headers: { token: token } }
      );
      toast.success(t(response.data.message));
      setEmailData({ currentPassword: '', newEmail: '' });
      setUser({ ...user, email: emailData.newEmail });
    } catch (error) {
      toast.error(t(error.response?.data?.message || 'errorUpdatingEmail'));
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmNewPassword) {
      toast.error(t('fillAllFieldsPassword'));
      return;
    }
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      toast.error(t('passwordsDoNotMatch'));
      return;
    }
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${backendUrl}/api/user/update-password`,
        { currentPassword: passwordData.currentPassword, newPassword: passwordData.newPassword },
        { headers: { token: token } }
      );
      toast.success(t(response.data.message));
      setPasswordData({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
    } catch (error) {
      toast.error(t(error.response?.data?.message || 'errorUpdatingPassword'));
    }
  };

  // Function to switch languages
  const switchLanguage = () => {
    const newLang = i18n.language === 'en' ? 'bg' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap:'10px', alignItems: 'center', maxWidth: '400px', margin: '50px auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap:'10px', marginBottom: '20px', textAlign: 'center' }}>
        <p><strong>{t('username')}:</strong> {user.name}</p>
        <p><strong>{t('email')}:</strong> {user.email}</p>
      </div>

      <form onSubmit={handleEmailChange} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginBottom: '20px' }}>
        <h3 style={{ padding: '8px'}}>{t('changeEmail')}</h3>
        <input
          type="password"
          placeholder={t('currentPassword')}
          value={emailData.currentPassword}
          onChange={(e) => setEmailData({ ...emailData, currentPassword: e.target.value })}
          style={{ width: '100%', padding: '8px', marginBottom: '10px', textAlign: 'center' }}
          required
        />
        <input
          type="email"
          placeholder={t('newEmail')}
          value={emailData.newEmail}
          onChange={(e) => setEmailData({ ...emailData, newEmail: e.target.value })}
          style={{ width: '100%', padding: '8px', marginBottom: '10px', textAlign: 'center' }}
          required
        />
        <button type="submit" style={{ padding: '10px 20px', background: '#000', color: '#fff' }}>
          {t('updateEmail')}
        </button>
      </form>

      <form onSubmit={handlePasswordChange} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <h3 style={{ padding: '8px'}}>{t('changePassword')}</h3>
        <input
          type="password"
          placeholder={t('currentPassword')}
          value={passwordData.currentPassword}
          onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
          style={{ width: '100%', padding: '8px', marginBottom: '10px', textAlign: 'center' }}
          required
        />
        <input
          type="password"
          placeholder={t('newPassword')}
          value={passwordData.newPassword}
          onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
          style={{ width: '100%', padding: '8px', marginBottom: '10px', textAlign: 'center' }}
          required
        />
        <input
          type="password"
          placeholder={t('confirmNewPassword')}
          value={passwordData.confirmNewPassword}
          onChange={(e) => setPasswordData({ ...passwordData, confirmNewPassword: e.target.value })}
          style={{ width: '100%', padding: '8px', marginBottom: '10px', textAlign: 'center' }}
          required
        />
        <button type="submit" style={{ padding: '10px 20px', background: '#000', color: '#fff' }}>
          {t('updatePassword')}
        </button>
      </form>
    </div>
  );
};

export default AccountManagement;


// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { ShopContext } from '../context/ShopContext';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const AccountManagement = () => {
//   const [user, setUser] = useState({ name: '', email: '' });
//   const [emailData, setEmailData] = useState({ currentPassword: '', newEmail: '' });
//   const [passwordData, setPasswordData] = useState({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
//   const { backendUrl } = useContext(ShopContext);
//   const navigate = useNavigate();

//   // Fetch user profile when the page loads
//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         navigate('/login');
//         return;
//       }
//       try {
//         const response = await axios.get(`${backendUrl}/api/user/profile`, {
//           headers: { token: token },
//         });
//         if (response.data.success) {
//           setUser(response.data.user);
//         } else {
//           toast.error(response.data.message);
//           navigate('/login');
//         }
//       } catch (error) {
//         toast.error('Error fetching profile');
//         navigate('/login');
//       }
//     };
//     fetchProfile();
//   }, [backendUrl, navigate]);

//   // Email update handler (existing functionality)
//   const handleEmailChange = async (e) => {
//     e.preventDefault();
//     if (!emailData.currentPassword || !emailData.newEmail) {
//       toast.error('Please fill in all fields for email update.');
//       return;
//     }
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.post(
//         `${backendUrl}/api/user/update-email`,
//         emailData,
//         { headers: { token: token } }
//       );
//       toast.success(response.data.message);
//       setEmailData({ currentPassword: '', newEmail: '' });
//       setUser({ ...user, email: emailData.newEmail }); // Update displayed email
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Error updating email.');
//     }
//   };

//   // Password update handler (existing functionality)
//   const handlePasswordChange = async (e) => {
//     e.preventDefault();
//     if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmNewPassword) {
//       toast.error('Please fill in all fields for password update.');
//       return;
//     }
//     if (passwordData.newPassword !== passwordData.confirmNewPassword) {
//       toast.error('New passwords do not match.');
//       return;
//     }
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.post(
//         `${backendUrl}/api/user/update-password`,
//         { currentPassword: passwordData.currentPassword, newPassword: passwordData.newPassword },
//         { headers: { token: token } }
//       );
//       toast.success(response.data.message);
//       setPasswordData({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Error updating password.');
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '400px', margin: '50px auto' }}>
//       <h2>My Account</h2>
//       {/* Display current username and email */}
//       <div style={{ marginBottom: '20px', textAlign: 'center' }}>
//         <p><strong>Username:</strong> {user.name}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//       </div>

//       {/* Email Update Form */}
//       <form onSubmit={handleEmailChange} style={{ width: '100%', marginBottom: '20px' }}>
//         <h3>Change Email</h3>
//         <input
//           type="password"
//           placeholder="Current Password"
//           value={emailData.currentPassword}
//           onChange={(e) => setEmailData({ ...emailData, currentPassword: e.target.value })}
//           style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
//           required
//         />
//         <input
//           type="email"
//           placeholder="New Email"
//           value={emailData.newEmail}
//           onChange={(e) => setEmailData({ ...emailData, newEmail: e.target.value })}
//           style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
//           required
//         />
//         <button type="submit" style={{ padding: '10px 20px', background: '#000', color: '#fff' }}>
//           Update Email
//         </button>
//       </form>

//       {/* Password Update Form */}
//       <form onSubmit={handlePasswordChange} style={{ width: '100%' }}>
//         <h3>Change Password</h3>
//         <input
//           type="password"
//           placeholder="Current Password"
//           value={passwordData.currentPassword}
//           onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
//           style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
//           required
//         />
//         <input
//           type="password"
//           placeholder="New Password"
//           value={passwordData.newPassword}
//           onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
//           style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Confirm New Password"
//           value={passwordData.confirmNewPassword}
//           onChange={(e) => setPasswordData({ ...passwordData, confirmNewPassword: e.target.value })}
//           style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
//           required
//         />
//         <button type="submit" style={{ padding: '10px 20px', background: '#000', color: '#fff' }}>
//           Update Password
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AccountManagement;