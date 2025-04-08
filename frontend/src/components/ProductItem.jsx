import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {

  const { currency } = useContext(ShopContext)

  return (
    <Link className="hover:shadow-[0_10px_35px_rgba(0,0,0,.5)] hover:bg-gray-500 hover:text-white transition delay-50 duration-300 ease-in-out text-gray-700 cursor-pointer block rounded-lg p-4 flex flex-col" to={`/product/${id}`}>
      <div className="w-full aspect-video overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
          src={image[0]}
          alt={name}
        />
      </div>
      <div className='flex flex-col justify-between'>
        <p className="pt-3 pb-1 text-xl">{name}</p>
        <p className="text-sm font-medium">{currency}{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem