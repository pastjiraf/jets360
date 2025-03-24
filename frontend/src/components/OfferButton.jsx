import React, { useState } from 'react';
import ContactForm from './ContactForm';
import { useTranslation } from 'react-i18next';


const OfferButton = () => {
  const { t } = useTranslation();

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="mt-8 flex flex-col items-start">
      <button
        onClick={toggleForm}
        className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
      >
        {isFormVisible ? t('hide_form') : t('free_offer')}
      </button>
      {isFormVisible && <ContactForm />}
    </div>
  );
};

export default OfferButton;