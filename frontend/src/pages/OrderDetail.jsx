import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const OrderDetail = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  // Get the order data from route state
  const order = location.state;

  if (!order) {
    return (
      <div className="p-8">
        <p>{t('No order details available')}</p>
        <button
          className="border px-4 py-2 mt-4 rounded"
          onClick={() => navigate('/orders')}
        >
          {t('Back to Orders')}
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{t('Order Detail')}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <img className="w-32 md:w-48" src={order.image[0]} alt={order.name} />
        <div>
          <p className="text-lg font-medium">{order.name}</p>
          <div className="flex items-center gap-3 mt-2">
            <p>{t('Price')}: {order.price}</p>
            <p>{t('Quantity')}: {order.quantity}</p>
            <p>{t('Size')}: {order.size}</p>
          </div>
          <p className="mt-2">{t('Date')}: {new Date(order.date).toDateString()}</p>
          <p className="mt-2">
            {t('Payment')}: {order.paymentMethod === 'COD' ? t('COD') : order.paymentMethod}
          </p>
          <p className="mt-2">{t('Status')}: {t(order.status)}</p>
          {/* You can add more order details here if needed */}
        </div>
      </div>
      <button
        className="mt-6 border px-4 py-2 rounded"
        onClick={() => navigate('/orders')}
      >
        {t('Back to Orders')}
      </button>
    </div>
  );
};

export default OrderDetail;
