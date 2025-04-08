import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { useTranslation } from 'react-i18next';

const RelatedProducts = ({ category, selectedProductId }) => {
  const { t } = useTranslation();
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.filter((item) => item._id !== selectedProductId);

      let groupA = productsCopy.filter((item) => item.category === category);

      let groupB = productsCopy.filter((item) => item.category !== category);

      let related = groupA.slice(0, 5);

      if (related.length < 5) {
        let remaining = 5 - related.length;
        let shuffledB = [...groupB].sort(() => 0.5 - Math.random());
        related = related.concat(shuffledB.slice(0, remaining));
      }

      setRelated(related);
    }
  }, [products, category, selectedProductId]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={t('relatedCaps')} text2={t('productsCaps')} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;