import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Modal from './components/Modal';
import CardDetailModal from './components/CardDetailModal';
import Footer from './components/Footer';
import { CartContext } from './context/CartContext';

function App() {
  const { modal, closeModal, detailCard, closeDetailModal } = useContext(CartContext);

  return (
    <Router>
      <div className="h-screen bg-[#1A1A2E] flex flex-col">
        <Modal 
          isOpen={modal.isOpen}
          message={modal.message}
          type={modal.type}
          onClose={closeModal}
        />
        <CardDetailModal 
          isOpen={!!detailCard}
          card={detailCard}
          onClose={closeDetailModal}
        />
        
        <Header />
        
        <div className="flex-grow overflow-y-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carrinho" element={<CartPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;