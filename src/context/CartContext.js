import React, { createContext, useState, useEffect } from 'react';

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

  const [modal, setModal] = useState({ isOpen: false, message: '', type: 'success' });
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTrigger, setSearchTrigger] = useState(0);
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [detailCard, setDetailCard] = useState(null);

  useEffect(() => {
    localStorage.setItem('yugioh_cart', JSON.stringify(cartItems));
  }, [cartItems]);

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