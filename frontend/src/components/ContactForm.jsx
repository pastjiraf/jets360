import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { ShopContext } from '../context/ShopContext';

const ContactForm = () => {
  const { t } = useTranslation();
  const {backendUrl} = useContext(ShopContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backendUrl + '/api/user/send-email', { name, email, phone, message });
      if (response.status === 200) {
        setStatus(t('email_sent_success'));
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      }
    } catch (error) {
      console.error(t('error_sending_email'), error); 
      setStatus(t('error_sending_email')); 
    }
  };

  return (
    <div className="mt-8 flex flex-col items-start">
      <h2 className="text-xl font-bold mb-4">{t('contact_us')}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        <label className="mb-1">{t('name')}:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className="mb-3 p-2 border rounded w-full"
        />
        <label className="mb-1">{t('email')}:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          className="mb-3 p-2 border rounded w-full"
        />
        <label className="mb-1">{t('phone')}:</label>
        <input 
          type="tel" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
          className="mb-3 p-2 border rounded w-full"
        />
        <label className="mb-1">{t('message')}:</label>
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
          className="mb-3 p-2 border rounded w-full"
        />
        <button 
          type="submit" 
          className="bg-black text-white p-2 rounded hover:bg-gray-700"
        >
          {t('send')}
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
};

export default ContactForm;