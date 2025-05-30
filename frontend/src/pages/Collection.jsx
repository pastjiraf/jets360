import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

import { useTranslation } from 'react-i18next';


const Collection = () => {

  const { t } = useTranslation();


  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }

    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy)

  }

  const sortProduct = () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }

  }

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products])

  useEffect(() => {
    sortProduct()
  }, [sortType])

  return (
    <div className='flex flex-col md:flex-row gap-1 md:gap-10 pt-10 border-t' >


      {/* Filter Options */}
      <div className='min-w-60' >
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2' >{t('filtersCaps')}
          <img className={`h-3 md:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} md:block`}>
          <p className='mb-3 text-sm font-medium'>{t('manufacturer')}</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2 cursor-pointer'>
              <input className='w-3' type="checkbox" value="Airbus" onChange={toggleCategory} />
              Airbus
            </label>
            <label className='flex gap-2 cursor-pointer'>
              <input className='w-3' type="checkbox" value={'Bombardier'} onChange={toggleCategory} />Bombardier
            </label>
            <label className='flex gap-2 cursor-pointer'>
              <input className='w-3' type="checkbox" value={'Embraer'} onChange={toggleCategory} />Embraer
            </label>
            <label className='flex gap-2 cursor-pointer'>
              <input className='w-3' type="checkbox" value={'Gulfstream'} onChange={toggleCategory} />Gulfstream
            </label>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} md:block`}>
          <p className='mb-3 text-sm font-medium'>{t('seats')}</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2 cursor-pointer'>
              <input className='w-3' type="checkbox" value={'1-10'} onChange={toggleSubCategory} />1-10
            </label>
            <label className='flex gap-2 cursor-pointer'>
              <input className='w-3' type="checkbox" value={'11-20'} onChange={toggleSubCategory} />11-20
            </label>
            <label className='flex gap-2 cursor-pointer'>
              <input className='w-3' type="checkbox" value={'21-30'} onChange={toggleSubCategory} />21-30
            </label>
          </div>
        </div>

      </div>

      {/* Right Side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <div className="hidden sm:block">
            <Title text1={t('allCaps')} text2={t('manufacturersCaps')} />
          </div>
          {/* Product sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2' >
            <option value="relevant">{t('sortByRelevance')}</option>
            <option value="low-high">{t('sortByPriceLowHigh')}</option>
            <option value="high-low">{t('sortByPriceHighLow')}</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6' >
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default Collection