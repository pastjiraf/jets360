import React from 'react'
import { assets } from '../assets/assets'

import { useTranslation } from 'react-i18next';

import { Link, NavLink } from 'react-router-dom'



const Footer = () => {

  const { t } = useTranslation();


  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>{t('logoMoto')}</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>{t('company')}</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <NavLink to='/' className='flex flex-col items-start gap-1'>
              <p>{t('home')}</p>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-start gap-1'>
              <p>{t('aboutUs')}</p>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-start gap-1'>
              <p>{t('contact')}</p>
            </NavLink>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>{t('getInTouch')}</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+359 89 432 5917</li>
            <li>contact@jets360.com</li>
          </ul>
        </div>
      </div>

      <div >
        <hr />
        <p className='py-5 text-sm text-center'>
          {t('copyright')}
        </p>
      </div>
    </div>
  )
}

export default Footer