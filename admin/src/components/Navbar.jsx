import React from 'react'
import { assets } from '../assets/assets'
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../../frontend/src/components/LanguageSelector';


const Navbar = ({ setToken }) => {

  const { t } = useTranslation();

  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
      <div className='flex gap-8'>
        <LanguageSelector />
        <button onClick={() => setToken('')} className='w-40 transition duration-300 ease-in-out active:shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:shadow-[0_0_35px_rgba(0,0,0,0.25)] shadow-lg bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>{t('logout')}</button>
      </div>
    </div>
  )
}

export default Navbar