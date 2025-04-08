// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { backendUrl, currency } from "../App";
// import { toast } from "react-toastify";
// import { assets } from "../assets/assets";

// import { useTranslation } from 'react-i18next';


// const Orders = ({ token }) => {

//   const { t } = useTranslation();
  
//   console.log();

//   const [orders, setOrders] = useState([]);

//   const fetchAllOrders = async () => {
//     if (!token) {
//       return null;
//     }

//     try {
//       const response = await axios.post(
//         backendUrl + "/api/order/list",
//         {},
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         setOrders(response.data.orders);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error(error.messaage);
//     }
//   };

//   const statusHandler = async (event, orderId) => {
//     try {
//       const response = await axios.post(
//         backendUrl + "/api/order/status",
//         { orderId, status: event.target.value },
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         await fetchAllOrders();
//       }
//     } catch (error) {
//       console.log(error)
//       toast.error(response.data.messaage)
//     }
//   };

//   useEffect(() => {
//     fetchAllOrders();
//   }, [token]);

//   return (
//     <div>
//       <h3>{t('orders')}</h3>
//       <div>
//         {orders.map((order, index) => (
//           <div
//             className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700"
//             key={index}
//           >
//             <img className="w-12" src={assets.parcel_icon} alt="parcel icon" />
//             <div>
//               <div>
//                 {order.items.map((item, index) => {
//                   if (index === order.items.length - 1) {
//                     return (
//                       <p className="py-0.5" key={index}>
//                         {" "}
//                         {item.name} x <span>{item.quantity}</span>{" "}
//                       </p>
//                     );
//                   } else {
//                     return (
//                       <p className="py-0.5" key={index}>
//                         {" "}
//                         {item.name} x <span>{item.quantity}</span>
//                         ,{" "}
//                       </p>
//                     );
//                   }
//                 })}
//               </div>
//               <p className="mt-3 mb-2 font-medium">
//                 {order.address.firstName + " " + order.address.lastName}
//               </p>
//               <div>
//                 <p>{order.address.street + ","}</p>
//                 <p>
//                   {order.address.city +
//                     ", " +
//                     order.address.state +
//                     ", " +
//                     order.address.country +
//                     ", " +
//                     order.address.zipcode}
//                 </p>
//               </div>
//               <p>{order.address.phone}</p>
//             </div>
//             <div>
//               <p className="text-sm sm:text-[15px]">
//                 {t('items')} : {order.items.length}
//               </p>
//               <p className="mt-3">{t('method')} : {t(order.paymentMethod)}</p>
//               <p>{t('Payment')} : {order.payment ? t('Done') : t('Pending')}</p>
//               <p>{t('Date')} : {new Date(order.date).toLocaleDateString()}</p>
//             </div>
//             <p className="text-sm sm:text-[15px]">
//               {currency}
//               {order.amount}
//             </p>
//             <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className="p-2 font-semibold">
//               <option value="Order Placed">{t('Order Placed')}</option>
//               <option value="Packing">{t('Packing')}</option>
//               <option value="Shipped">{t('Shipped')}</option>
//               <option value="Out for delivery">{t('Out for delivery')}</option>
//               <option value="Delivered">{t('Delivered')}</option>
//             </select>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";

const Orders = ({ token }) => {
  const { t } = useTranslation();
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Функция за изтриване на поръчка
  const deleteOrderHandler = async (orderId) => {
    if (!window.confirm(t("Are you sure you want to delete this order?"))) return;
    try {
      const response = await axios.post(
        backendUrl + "/api/order/delete",
        { orderId },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      fetchAllOrders();
    }
  }, [token]);

  return (
    <div>
      <h3>{t("orders")}</h3>
      <div>
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700"
          >
            <img
              className="w-12"
              src={assets.parcel_icon}
              alt="parcel icon"
            />
            <div>
              <div>
                {order.items.map((item, idx) => (
                  <p className="py-0.5" key={idx}>
                    {item.name} x <span>{item.quantity}</span>
                    {idx !== order.items.length - 1 && ", "}
                  </p>
                ))}
              </div>
              <p className="mt-3 mb-2 font-medium">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div>
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <div>
              <p className="text-sm sm:text-[15px]">
                {t("items")}: {order.items.length}
              </p>
              <p className="mt-3">{t("method")}: {t(order.paymentMethod)}</p>
              <p>{t("Payment")}: {order.payment ? t("Done") : t("Pending")}</p>
              <p>{t("Date")}: {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className="text-sm sm:text-[15px]">
              {currency}{order.amount}
            </p>
            <div className="flex flex-col gap-2">
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
                className="p-2 font-semibold"
              >
                <option value="Order Placed">{t("Order Placed")}</option>
                <option value="Packing">{t("Packing")}</option>
                <option value="Shipped">{t("Shipped")}</option>
                <option value="Out for delivery">{t("Out for delivery")}</option>
                <option value="Delivered">{t("Delivered")}</option>
              </select>
              <button
                onClick={() => deleteOrderHandler(order._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
              >
                {t("Delete Order")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
