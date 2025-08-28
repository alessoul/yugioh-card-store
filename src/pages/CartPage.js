// src/pages/CartPage.js

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, updateItemQuantity, openDetailModal } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.card_prices[0]?.cardmarket_price || '0.50');
    return total + (price * item.quantity);
  }, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold my-6 text-center">Meu Carrinho de Duelos</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-xl text-gray-400">Seu carrinho está vazio.</p>
          <Link to="/" className="mt-4 inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700">
            Procurar Cartas
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna da Lista de Itens */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="bg-[#2E2E48] rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img 
                    src={item.card_images[0].image_url_small} 
                    alt={item.name} 
                    className="w-16 rounded cursor-pointer hover:scale-110 transition-transform"
                    onClick={() => openDetailModal(item)}
                  />
                  <div>
                    <h2 className="font-bold text-lg">{item.name}</h2>
                    <p className="text-yellow-400 font-semibold">R$ {item.card_prices[0]?.cardmarket_price || '0.50'}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <label className="text-sm">Qtd:</label>
                      <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="bg-gray-700 w-6 h-6 rounded-full font-bold">-</button>
                      <span className="font-bold">{item.quantity}</span>
                      <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="bg-gray-700 w-6 h-6 rounded-full font-bold">+</button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-600 text-white font-bold py-1 px-3 rounded hover:bg-red-700 self-start"
                >
                  Remover
                </button>
              </div>
            ))}
          </div>

          {/* Coluna do Resumo do Pedido (CONTEÚDO RESTAURADO) */}
          <div className="bg-[#161625] p-6 rounded-lg self-start">
            <h2 className="text-2xl font-bold mb-4">Resumo do Pedido</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>R$ {totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-6">
              <span>Frete</span>
              <span>Grátis</span>
            </div>
            <div className="border-t border-gray-600 pt-4 flex justify-between font-bold text-xl">
              <span>Total</span>
              <span>R$ {totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full mt-6 bg-green-600 text-white font-bold py-3 rounded hover:bg-green-700">
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;