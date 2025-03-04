import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios'
import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router-dom';


const Orders = () => {

  const { t } = useTranslation();
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setorderData] = useState([])
  const navigate = useNavigate();


  const loadOrderData = async () => {
    try {

      console.log(token);

      if (!token) {
        return null
      }

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } })
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
            console.log(item);
          })
        })

        setorderData(allOrdersItem.reverse())
      }

    } catch (error) {

    }
  }

  useEffect(() => {
    if (token) {
      loadOrderData();
    }
  }, [token]);

  return (
    <div className='border-t pt-16' >
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {
          orderData.map((item, index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 test-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p>{currency}{item.price}</p>
                    <p>{t('Quantity')}: {item.quantity}</p>
                    {/* <p>{t('Size')}: {item.size}</p> */}
                  </div>
                  <p className='mt-1'>{t('Date')}: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                  <p className='mt-1'>{t('Payment')}: <span className='text-gray-400'> {item.paymentMethod === 'COD' ? t('COD') : item.paymentMethod}</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>{t(item.status)}</p>
                </div>

                {/* Old button - not working */}
                {/* <button className='border px-4 py-2 text-sm font-medium rounded-sm'>{t('trackOrder')}</button> */}

                {/* When clicking, navigate to OrderDetail and pass the order item as state */}
                {/* <NavLink to='/order-detail'
                  className='border px-4 py-2 text-sm font-medium rounded-sm'
                >
                  {t('trackOrder')}
                </NavLink> */}
                <button
                  className='border px-4 py-2 text-sm font-medium rounded-sm'
                  onClick={() => navigate('/order-detail', { state: item })}
                >
                  {t('trackOrder')}
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders