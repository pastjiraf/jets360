import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

import { useTranslation } from 'react-i18next';


const CartTotal = () => {

    const { t } = useTranslation();
    
  
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  
    return (
    <div className='w-full' >
        <div className='text-2xl' >
            <Title text1={t('cart')} text2={t('total')} />
        </div>

        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between' >
                <p>{t('subtotal')}</p>
                <p>{currency} {getCartAmount()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between' >
                <p>{t('shippingFee')}</p>
                <p>{currency} {delivery_fee}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>{t('totalAmmount')}</b>
                <b>{currency} {getCartAmount() === 0 ? 0 : (getCartAmount() + delivery_fee)}.00</b>
            </div>
        </div>
        
    </div>
  )
}

export default CartTotal