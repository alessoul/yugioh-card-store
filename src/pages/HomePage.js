import React, { useState, useEffect, useContext } from 'react';
import api from '../services/api';
import { CartContext } from '../context/CartContext';
import { LanguageContext } from '../context/LanguageContext';
import { translate } from '../utils/translations';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Banner from '../components/Banner';
import ConfirmationModal from '../components/ConfirmationModal';
import FilterSidebar from '../components/FilterSidebar';
import CardDetailModal from '../components/CardDetailModal';

const TOTAL_CARDS_IN_DB = 12933;

const HomePage = () => {
  const { cartItems, addToCart, searchTerm, searchTrigger, selectedAttributes, clearAllFilters, openDetailModal } = useContext(CartContext);
  const { language } = useContext(LanguageContext);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(15);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedRaces, setSelectedRaces] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const totalPages = Math.ceil(TOTAL_CARDS_IN_DB / cardsPerPage);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      try {
        let params = new URLSearchParams();
        params.append('num', cardsPerPage);
        params.append('offset', currentPage * cardsPerPage);

        if (language === 'pt') {
          params.append('language', 'pt');
        }

        if (searchTerm) {
          params.append('fname', searchTerm);
        } else {
          if (selectedAttributes.length > 0) {
            params.append('attribute', selectedAttributes.join(','));
          }
          if (selectedTypes.length > 0) {
            params.append('type', selectedTypes.join(','));
          }
          if (selectedRaces.length > 0) {
            params.append('race', selectedRaces.join(','));
          }
        }
        
        const response = await api.get(`cardinfo.php?${params.toString()}`);
        setCards(response.data.data);
      } catch (error) {
        setCards([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, [currentPage, cardsPerPage, selectedAttributes, selectedTypes, selectedRaces, searchTrigger, searchTerm, language]);

  const handleTypeToggle = (type) => {
    setSelectedTypes(prev => {
      if (prev.includes(type)) {
        return prev.filter(item => item !== type);
      } else {
        return [...prev, type];
      }
    });
    setCurrentPage(0);
  };

  const handleRaceToggle = (race) => {
    setSelectedRaces(prev => {
      if (prev.includes(race)) {
        return prev.filter(item => item !== race);
      } else {
        return [...prev, race];
      }
    });
    setCurrentPage(0);
  };

  const handleClearFilters = () => {
    clearAllFilters();
    setSelectedTypes([]);
    setSelectedRaces([]);
    setCurrentPage(0);
  };
  
  const handleBuyClick = (card) => {
    const existingItem = cartItems.find(item => item.id === card.id);
    if (existingItem) {
      setIsEditMode(true);
    } else {
      setIsEditMode(false);
    }
    setSelectedCard(card);
  };
  
  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const handleConfirmAddToCart = (card, quantity) => {
    addToCart(card, quantity);
  };

  return (
    <main className="container mx-auto p-4">
      <ConfirmationModal isOpen={!!selectedCard} onClose={handleCloseModal} onConfirm={handleConfirmAddToCart} card={selectedCard} isEditing={isEditMode}/>
      <Banner />
      <div className="flex flex-col md:flex-row gap-8 mt-6">
        <div className="w-full md:w-1/4 lg:w-1/5 self-start sticky top-[236px]">
          <FilterSidebar
            selectedTypes={selectedTypes}
            onTypeChange={handleTypeToggle}
            selectedRaces={selectedRaces}
            onRaceChange={handleRaceToggle}
            onClearFilters={handleClearFilters}
            cardsPerPage={cardsPerPage}
            setCardsPerPage={setCardsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div className="w-full md:w-3/4 lg:w-4/5">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
            {translate('availableCards', 'ui', language)}
          </h2>
          {loading ? (
            <p className="text-center text-xl animate-pulse">{translate('loading', 'ui', language)}...</p>
          ) : cards.length > 0 ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {cards.map(card => (
                  <Card 
                    key={card.id} 
                    cardData={card} 
                    onBuyClick={handleBuyClick} 
                    onImageClick={openDetailModal}
                  />
                ))}
              </div>
              {!searchTerm && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}
            </>
          ) : (
            <p className="text-center text-xl text-red-400">{translate('noCardsFound', 'ui', language)}</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default HomePage;