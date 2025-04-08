import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useTranslation } from 'react-i18next';


const Sidebar = () => {
    
    const { t } = useTranslation();
    
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

            <NavLink className='transition duration-300 ease-in-out active:shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:shadow-[0_0_35px_rgba(0,0,0,0.25)] shadow-lg flex items-center gap-3 border border-none px-3 py-2 rounded-l' to='/add'>
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>{t('addItems')}</p>
            </NavLink>

            <NavLink className='transition duration-300 ease-in-out active:shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:shadow-[0_0_35px_rgba(0,0,0,0.25)] shadow-lg flex items-center gap-3 border border-none px-3 py-2 rounded-l' to='/list'>
                <img className='w-5 h-5' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>{t('listItems')}</p>
            </NavLink>

            <NavLink className='transition duration-300 ease-in-out active:shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:shadow-[0_0_35px_rgba(0,0,0,0.25)] shadow-lg flex items-center gap-3 border border-none px-3 py-2 rounded-l' to='/orders'>
                <img className='w-5 h-5' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>{t('ordersItems')}</p>
            </NavLink>

        </div>
    </div>
  )
}

export default Sidebar