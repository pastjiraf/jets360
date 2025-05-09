// Working Login.jsx


// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// import { useTranslation } from 'react-i18next';


// const Login = () => {

//   const { t } = useTranslation();

//   const [currentState, setCurrentState] = useState('Login');
//   const {token, setToken, navigate, backendUrl} = useContext(ShopContext);

//   const [name, setName] = useState('')
//   const [password, setPassword] = useState('')
//   const [email, setEmail] = useState('')

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     try {
//       if (currentState === 'Sign Up') {
        
//         const response = await axios.post(backendUrl + '/api/user/register',{name,email,password})
//         if (response.data.success) {
//           setToken(response.data.token)
//           localStorage.setItem('token',response.data.token)
//         } else {
//           toast.error(response.data.message)
//         }

//       } else {

//         const response = await axios.post(backendUrl + '/api/user/login', {email,password})
//         if (response.data.success){
//           setToken(response.data.token)
//           localStorage.setItem('token',response.data.token)
//         } else {
//           toast.error(response.data.message)
//         }
//       }
      
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   }

//   useEffect(()=>{
//     if (token) {
//       navigate('/')
//     }
//   },[token])

//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
//       <div className='inline-flex items-center gap-2 mb-2 mt-10'>
//         <p className='prata-regular text-3xl'>{t(currentState)}</p>
//         <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
//       </div>
//       {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder={t('name')} required/>}  
//       <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder={t('email')} required/>
//       <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder={t('password')} required/>
//       <div className='w-full flex justify-between text-sm mt-[-8px]'>
//         <p className='cursor-pointer'>{t('forgottenPassword')}</p>
//         {
//           currentState === 'Login'
//           ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>{t('createAccount')}</p>
//           : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>{t('loginHere')}</p>
//         }

//       </div>
//       <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState==='Login' ? t('Login') : t('Sign Up')}</button>
//     </form>
//   )
// }

// export default Login





import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t, i18n } = useTranslation();
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false); // Toggle forgot password form
  const [forgotEmail, setForgotEmail] = useState(''); // Email for reset request

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(backendUrl + '/api/user/forgot-password', { email: forgotEmail, language: i18n.language });
      if (response.status === 200) {
        toast.success(t('checkEmailSuccess'));
        setForgotPassword(false); // Hide form after success
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(t('emailError'));
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <div className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{t(currentState)}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className='w-full px-3 py-2 border border-gray-800'
          placeholder={t('name')}
          required
        />
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder={t('email')}
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder={t('password')}
        required
      />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer' onClick={() => setForgotPassword(!forgotPassword)}>
          {t('forgottenPassword')}
        </p>
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>
            {t('createAccount')}
          </p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>
            {t('loginHere')}
          </p>
        )}
      </div>
      {forgotPassword && (
        <form onSubmit={handleForgotPassword} className='mt-4 w-full'>
          <input
            type="email"
            value={forgotEmail}
            onChange={(e) => setForgotEmail(e.target.value)}
            placeholder={t('enterEmail')}
            className='w-full px-3 py-2 border border-gray-800'
            required
          />
          <button type="submit" className='bg-black text-white font-light px-8 py-2 mt-4'>
            {t('sendResetLink')}
          </button>
        </form>
      )}
      <button onClick={onSubmitHandler} className='bg-black text-white font-light px-8 py-2 mt-4'>
        {currentState === 'Login' ? t('Login') : t('Sign Up')}
      </button>
    </div>
  );
};

export default Login;