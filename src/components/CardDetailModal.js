import React, { useContext } from 'react';
import { FiXCircle } from 'react-icons/fi';
import { translate } from '../utils/translations';
import { LanguageContext } from '../context/LanguageContext';

const CardDetailModal = ({ isOpen, onClose, card }) => {
  const { language } = useContext(LanguageContext);

  if (!isOpen || !card) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
      <div className="bg-[#161625] rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row gap-6 p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white z-10">
          <FiXCircle size={32} />
        </button>

        <div className="w-full md:w-1/3 flex-shrink-0">
          <img src={card.card_images[0].image_url} alt={card.name} className="w-full rounded-lg" />
        </div>

        <div className="w-full md:w-2/3 flex flex-col overflow-y-auto">
          <h2 className="text-3xl font-bold text-yellow-400 mb-2">{card.name}</h2>
          
          <div className="flex items-center gap-4 mb-4">
            <p className="text-lg text-gray-300">{translate(card.type, 'types', language)}</p>
            {card.attribute && (
              <div className="flex items-center gap-2">
                <img 
                  src={`/attributes/${card.attribute.toUpperCase()}.png`} 
                  alt={card.attribute}
                  className="w-6 h-6"
                />
                <span className="capitalize">{translate(card.attribute, 'attributes', language)}</span>
              </div>
            )}
          </div>

          <div className="bg-[#2E2E48] p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">{translate('description', 'ui', language)}</h3>
            <p className="text-gray-300 whitespace-pre-line">{card.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailModal;