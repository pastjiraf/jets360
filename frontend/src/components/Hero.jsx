import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next';



const Hero = () => {

  const { t } = useTranslation();


  return (
    <Link to={`/collection`}>
      <div className='shadow-2xl hover:shadow-sm flex flex-col sm:flex-row border border-gray-400 transition delay-150 duration-300 ease-in-out'>
        {/* Hero Left Side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
          <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
              <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
              <p className='front-medium text-sm md:text-base' >{t('takeALookAt')}</p>
            </div>
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed' >{t('allCaps')}</h1>
            <div className='flex items-center gap-2'>
              <p className='font-semibold text-sm md:text-base'>{t('jets')}</p>
              <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
            </div>
          </div>
        </div>

        {/* Hero Right */}
        <img className='hover:shadow-sm shadow-2xl w-full sm:w-1/2 transition delay-150 duration-300 ease-in-out' src={assets.hero_img} alt="" />
      </div>
    </Link>

  )
}

export default Hero