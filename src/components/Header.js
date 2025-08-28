import React, { useContext, useState } from 'react';
import { FiShoppingCart, FiSearch, FiX } from 'react-icons/fi';
import { CartContext } from '../context/CartContext';
import { LanguageContext } from '../context/LanguageContext';
import { translate } from '../utils/translations';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const { totalItemCount, setSearchTerm, triggerSearch, selectedAttributes, toggleAttribute } = useContext(CartContext);
  const { language, changeLanguage } = useContext(LanguageContext);
  const [localSearch, setLocalSearch] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const allAttributes = ['DARK', 'DIVINE', 'EARTH', 'FIRE', 'LIGHT', 'WATER', 'WIND'];

  const handleSearch = (e) => {
    e.preventDefault();
    if (localSearch.trim()) {
      setSearchTerm(localSearch);
      triggerSearch();
      navigate('/');
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="bg-[#161625] z-20 shadow-lg">
      <div className="flex justify-between items-center p-4">
        {!isSearchOpen && (
          <Link to="/">
            <img src="/logo.png" alt="Yu-Gi-Oh! Logo" className="h-12 flex-shrink-0" />
          </Link>
        )}
        <div className="flex-grow flex justify-center items-center">
          <form 
            onSubmit={handleSearch} 
            className={`w-full md:w-1/2 mx-4 ${isSearchOpen ? 'flex' : 'hidden sm:flex'}`}
          >
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder={translate('searchPlaceholder', 'ui', language)}
              className="w-full p-2 rounded-l-md bg-gray-700 border-none text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button type="submit" className="bg-blue-600 p-2 px-4 rounded-r-md font-semibold">
              <FiSearch size={20} />
            </button>
          </form>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button onClick={() => changeLanguage('pt')} className={`font-semibold p-1 rounded ${language === 'pt' ? 'text-yellow-400' : 'text-gray-400'}`}>PT</button>
            <button onClick={() => changeLanguage('en')} className={`font-semibold p-1 rounded ${language === 'en' ? 'text-yellow-400' : 'text-gray-400'}`}>EN</button>
          </div>
          <div className="sm:hidden">
            {isSearchOpen ? (
              <button onClick={() => setIsSearchOpen(false)}><FiX size={28} /></button>
            ) : (
              <button onClick={() => setIsSearchOpen(true)}><FiSearch size={28} /></button>
            )}
          </div>
          <Link to="/carrinho" className="relative cursor-pointer flex-shrink-0">
            <FiShoppingCart size={28} />
            {totalItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                {totalItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
      <div className="p-4 overflow-x-auto bg-black bg-opacity-20 border-t border-gray-700">
        <div className="flex justify-center items-center gap-4 md:gap-5 min-w-max px-4">
          {allAttributes.map(attribute => {
            const isSelected = selectedAttributes.includes(attribute);
            const formattedAttributeName = translate(attribute, 'attributes', language);
            return (
              <button 
                key={attribute}
                title={formattedAttributeName}
                className="flex flex-col items-center justify-center w-24 transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none"
                onClick={() => toggleAttribute(attribute)}
              >
                <img 
                  src={`/attributes/${attribute.toUpperCase()}.png`} 
                  alt={formattedAttributeName} 
                  className={`w-12 h-12 rounded-full transition-all duration-200 ${isSelected ? 'ring-2 ring-offset-2 ring-offset-[#161625] ring-yellow-400' : ''}`}
                />
                <span className={`text-xs font-semibold uppercase mt-2 transition-colors duration-200 ${isSelected ? 'text-yellow-400' : 'text-gray-400'}`}>
                  {formattedAttributeName}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;