import React, { createContext, useState, useEffect, useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import api from '../services/api';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem('yugioh_cart');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Erro ao ler o localStorage", error);
      return [];
    }
  });

  const { language } = useContext(LanguageContext);
  const [modal, setModal] = useState({ isOpen: false, message: '', type: 'success' });
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTrigger, setSearchTrigger] = useState(0);
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [detailCard, setDetailCard] = useState(null);

  useEffect(() => {
    localStorage.setItem('yugioh_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const updateCartLanguage = async () => {
      if (cartItems.length === 0) {
        return;
      }

      const cardIds = cartItems.map(item => item.id).join(',');
      
      try {
        const response = await api.get(`cardinfo.php?id=${cardIds}&language=${language}`);
        const translatedCardsData = response.data.data;

        const updatedCartItems = cartItems.map(oldItem => {
          const translatedItem = translatedCardsData.find(newItem => newItem.id === oldItem.id);
          return translatedItem ? { ...translatedItem, quantity: oldItem.quantity } : oldItem;
        });

        setCartItems(updatedCartItems);
      } catch (error) {
        console.error("Erro ao atualizar idiomas do carrinho:", error);
      }
    };

    updateCartLanguage();
  }, [language]);

  const addToCart = (card, quantityToAdd) => {
    const existingItem = cartItems.find(item => item.id === card.id);
    if (existingItem) {
      const updatedItems = cartItems.map(item =>
        item.id === card.id
          ? { ...item, quantity: item.quantity + quantityToAdd }
          : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems(prevItems => [...prevItems, { ...card, quantity: quantityToAdd }]);
    }
    setModal({ isOpen: true, message: 'Carrinho atualizado com sucesso!', type: 'success' });
  };

  const removeFromCart = (cardId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== cardId));
  };
  
  const updateItemQuantity = (cardId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cardId);
    } else {
      const updatedItems = cartItems.map(item =>
        item.id === cardId
          ? { ...item, quantity: newQuantity }
          : item
      );
      setCartItems(updatedItems);
    }
  };

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
  };

  const triggerSearch = () => {
    setSearchTrigger(prev => prev + 1);
  };
  
  const toggleAttribute = (attribute) => {
    setSelectedAttributes(prev => {
      if (prev.includes(attribute)) {
        return prev.filter(item => item !== attribute);
      } else {
        return [...prev, attribute];
      }
    });
    setSearchTerm('');
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedAttributes([]);
  };
  
  const openDetailModal = (card) => {
    setDetailCard(card);
  };

  const closeDetailModal = () => {
    setDetailCard(null);
  };

  const totalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const value = {
    cartItems, addToCart, removeFromCart, updateItemQuantity,
    modal, closeModal, totalItemCount,
    searchTerm, setSearchTerm, triggerSearch,
    selectedAttributes, toggleAttribute, clearAllFilters,
    detailCard, openDetailModal, closeDetailModal,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};