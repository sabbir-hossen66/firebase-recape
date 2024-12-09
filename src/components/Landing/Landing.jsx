import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../src/i18n/i18n'; // Import i18n configuration


const Landing = () => {
  const { t, i18n } = useTranslation();
  const [currentKey, setCurrentKey] = useState('welcome_message')

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

  };

  const availableKeys = [
    'welcome_message',
    'name',
    'language_label',
    'about',
    'contact',
    'footer_message',
  ];

  return (
    <div>
      <div className="App">
        {/* Dynamic Text */}
        <h1 className="bg-gray-400 h-[250px] flex justify-center items-center text-center text-4xl">
          {t(currentKey)}
        </h1>

        {/* Buttons to toggle dynamic keys */}
        <div className="mt-4">
          {availableKeys.map((key) => (
            <button
              key={key}
              className="py-2 border bg-blue-400 rounded-md px-4 m-2"
              onClick={() => setCurrentKey(key)}
            >
              Show {key.replace('_', ' ').toUpperCase()}
            </button>
          ))}
        </div>

        {/* Language Selection */}
        <div className="mt-4">
          <p>{t('language_label')}</p>
          <button
            className="py-2 border bg-orange-400 rounded-md px-4 mr-2"
            onClick={() => changeLanguage('en')}
          >
            English
          </button>
          <button
            className="py-2 border bg-orange-400 rounded-md px-4"
            onClick={() => changeLanguage('bn')}
          >
            বাংলা
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;