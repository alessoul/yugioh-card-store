 
import React, { useState, useEffect } from 'react'; 
import { FiXCircle } from 'react-icons/fi'; 
 
const ConfirmationModal = ({ isOpen, onClose, onConfirm, card, isEditing }) => { 
  const [quantity, setQuantity] = useState(1); 
   
  useEffect(() => { 
    if (isOpen) { 
      setQuantity(1); 
    } 
  }, [isOpen]); 
 
  if (!isOpen || !card) { 
    return null; 
  } 
 
  const handleIncrease = () => setQuantity(prev => prev + 1); 
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1)); 
 
  const handleConfirm = () => { 
    onConfirm(card, quantity); 
    onClose(); 
  }; 
   
  const title = isEditing ? "Carta já existente" : "Adicionar ao Carrinho"; 
  const message = isEditing ? "A carta já existe no carrinho, deseja adicionar mais unidades?" : 
"Selecione a quantidade desejada:"; 
  const confirmButtonText = isEditing ? "Adicionar" : "Confirmar"; 
 
  return ( 
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"> 
      <div className="bg-[#2E2E48] p-6 rounded-lg shadow-xl w-11/12 max-w-md text-center"> 
        <div className="flex justify-end"> 
          <button onClick={onClose} className="text-gray-400 hover:text-white"> 
            <FiXCircle size={24} /> 
          </button> 
        </div> 
        <h2 className="text-2xl font-bold mb-4">{title}</h2> 
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4"> 
          <img src={card.card_images[0].image_url_small} alt={card.name} className="w-24 
rounded-md" /> 
          <div> 
            <p className="text-lg font-semibold">{card.name}</p> 
            <p className="text-gray-300 text-sm mt-2">{message}</p> 
          </div> 
        </div> 
        <div className="flex justify-center items-center gap-4 mb-8"> 
          <label className="font-semibold">Quantidade:</label> 
          <div className="flex items-center gap-2"> 
            <button onClick={handleDecrease} className="bg-gray-700 w-8 h-8 rounded-full font-bold 
text-lg">-</button> 
            <span className="text-xl font-bold w-12 text-center">{quantity}</span> 
            <button onClick={handleIncrease} className="bg-gray-700 w-8 h-8 rounded-full font-bold 
text-lg">+</button> 
          </div> 
        </div> 
        <div className="flex gap-4"> 
          <button onClick={onClose} className="bg-gray-600 hover:bg-gray-700 text-white font-bold 
py-2 rounded-lg w-full"> 
            Cancelar 
          </button> 
          <button onClick={handleConfirm} className="bg-blue-600 hover:bg-blue-700 text-white 
font-bold py-2 rounded-lg w-full"> 
            {confirmButtonText} 
          </button> 
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default ConfirmationModal;