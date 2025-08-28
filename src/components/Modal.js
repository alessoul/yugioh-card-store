

import React from 'react'; 
import { FiXCircle, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi'; 
 
const Modal = ({ isOpen, onClose, message, type }) => { 
  if (!isOpen) { 
    return null; 
  } 
 
  const isSuccess = type === 'success'; 
  const Icon = isSuccess ? FiCheckCircle : FiAlertTriangle; 
  const iconColor = isSuccess ? 'text-green-500' : 'text-yellow-400'; 
  const title = isSuccess ? 'Sucesso!' : 'Atenção!'; 
 
  return ( 
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"> 
      <div className="bg-[#2E2E48] p-6 rounded-lg shadow-xl w-11/12 max-w-sm text-center"> 
        <div className="flex justify-end"> 
          <button onClick={onClose} className="text-gray-400 hover:text-white"> 
            <FiXCircle size={24} /> 
          </button> 
        </div> 
        <div className="flex justify-center mb-4"> 
          <Icon size={56} className={iconColor} /> 
        </div> 
        <h2 className="text-2xl font-bold mb-2">{title}</h2> 
        <p className="text-gray-300 mb-6">{message}</p> 
        <button 
          onClick={onClose} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg w-full" 
        > 
          Entendido 
        </button> 
      </div> 
    </div> 
  ); 
}; 
 
export default Modal;