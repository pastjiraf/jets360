import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

import { useTranslation } from 'react-i18next';


const About = () => {
  const { t } = useTranslation();

  return (
    
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={t('about')} text2={t('us')} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>{t('aboutUsPara1')}</p>
          <p>{t('aboutUsPara2')}</p>
          <b className='text-gray-800'>{t('ourMisson')}</b>
          <b>{t('aboutUsPara3')}</b>
        </div>

      </div>
      <div className='text-xl py-4'>
          <Title text1={t('why')} text2={t('chooseUs')}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>{t('uspHeadline1')}</b>
          <p className='text-gray-600'>{t('usp1')}</p>
        </div>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>{t('uspHeadline2')}</b>
          <p className='text-gray-600'>{t('usp2')}</p>
        </div>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>{t('uspHeadline3')}</b>
          <p className='text-gray-600'>{t('usp3')}</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About