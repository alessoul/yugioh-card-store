import React from 'react'; 
 
const Card = ({ cardData, onBuyClick, onImageClick }) => { 
  const price = cardData.card_prices[0]?.cardmarket_price || '0.50'; 
 
  return ( 
    <div className="bg-[#2E2E48] rounded-lg p-3 flex flex-col text-center shadow-lg"> 
      <div  
        onClick={() => onImageClick(cardData)}  
        className="cursor-pointer transform hover:scale-105 transition-transform duration-200" 
      > 
        <img src={cardData.card_images[0].image_url} alt={cardData.name} className="rounded-md 
w-full" /> 
      </div> 
      <h3 className="font-bold mt-2 truncate text-white" title={cardData.name}> 
        {cardData.name} 
      </h3> 
      <p className="text-sm text-gray-400">{cardData.type}</p> 
      <p className="text-lg font-semibold my-2 text-yellow-400">R$ {price}</p> 
      <button 
        onClick={() => onBuyClick(cardData)} 
        className="mt-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-2 
px-4 rounded hover:opacity-90" 
      > 
        COMPRAR 
      </button> 
    </div> 
  ); 
}; 
 
export default Card;