import React from 'react';

const FilterSidebar = ({ 
  selectedTypes, onTypeChange, 
  selectedRaces, onRaceChange,
  onClearFilters, 
  cardsPerPage, setCardsPerPage, setCurrentPage 
}) => {
  const types = [
    'Effect Monster','Spell Card','Trap Card','Normal Monster','Fusion Monster','Link Monster','Pendulum Effect Monster','Ritual Monster','Synchro Monster','XYZ Monster',
  ];

  const races = [
    'Spellcaster', 'Dragon', 'Zombie', 'Warrior', 'Beast-Warrior', 'Beast', 'Winged Beast',
    'Fiend', 'Fairy', 'Insect', 'Dinosaur', 'Reptile', 'Fish', 'Sea Serpent', 'Machine', 'Thunder',
    'Aqua', 'Pyro', 'Rock', 'Plant', 'Psychic', 'Cyberse'
  ];

  const handleCardsPerPageChange = (e) => {
    setCardsPerPage(Number(e.target.value));
    setCurrentPage(0);
  };

  return (
    <aside className="bg-[#161625] p-6 rounded-lg self-start sticky top-[236px]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-yellow-400 tracking-wider">Filtros</h3>
        <button
          onClick={onClearFilters}
          className="bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg text-sm hover:bg-red-600 transition-colors duration-200"
        >
          Limpar
        </button>
      </div>

      <div className="space-y-6">
        <div className="mb-6">
          <h4 className="font-semibold mb-3 text-gray-300 uppercase tracking-widest text-sm">Itens por Página</h4>
          <select
            value={cardsPerPage}
            onChange={handleCardsPerPageChange}
            className="w-full bg-gray-700 text-white rounded p-2 cursor-pointer focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
          </select>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-3 text-gray-300 uppercase tracking-widest text-sm">Tipo de Carta</h4>
          <div className="space-y-2">
            {types.map(type => (
              <label key={type} className="flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox h-5 w-5 bg-gray-700 border-gray-600 rounded text-blue-500 focus:ring-blue-500"
                  checked={selectedTypes.includes(type)}
                  onChange={() => onTypeChange(type)}
                />
                <span className="ml-2 text-gray-300">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-300 uppercase tracking-widest text-sm">Raça / Tipo de Monstro</h4>
          <div className="space-y-2 h-48 overflow-y-auto pr-2">
            {races.map(race => (
              <label key={race} className="flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox h-5 w-5 bg-gray-700 border-gray-600 rounded text-blue-500 focus:ring-blue-500"
                  checked={selectedRaces.includes(race)}
                  onChange={() => onRaceChange(race)}
                />
                <span className="ml-2 text-gray-300">{race}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;