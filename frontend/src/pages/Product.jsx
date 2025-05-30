import React, { useContext, useState, useEffect } from 'react'
import BestSeller from '../components/BestSeller'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';
import OfferButton from '../components/OfferButton';
import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('remove');
  const { t } = useTranslation();

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*------------- Product ------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row' >

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row' >
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full' >
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]' >
            <img className='w-full h-auto' src={image} alt="" />

          </div>
        </div>

        <div className='flex-1' >
          <h1 className='font-medium text-2xl mt-2' >{productData.name}</h1>

          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>

          {/* -------------- Contact Form ----------- */}
          <OfferButton />

          <button
            onClick={async () => {
              await addToCart(productData._id, size);
              toast.success(t('productAddedToCart'));
            }}
            className='mt-8 bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
          >
            {t('addToCart')}
          </button>

          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p> {t('priceDetail')} </p>
            <p> {t('freeQuote')} </p>
          </div>
          <hr className='mt-8 sm:w-4/5' />
        </div>
      </div>

      <div
        className="product-description columns-1 md:columns-2 gap-4"
        dangerouslySetInnerHTML={{ __html: productData.description }}
      />

      <div className='mt-10'>
      </div>

      {/* -------------- Display Related Products ----------- */}
      <RelatedProducts category={productData.category} selectedProductId={productData._id} />

    </div>
  ) : <div className='opacity-0' ></div>
}

export default Product