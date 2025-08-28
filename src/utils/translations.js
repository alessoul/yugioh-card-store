const dictionary = {
  pt: {
    attributes: {
      'DARK': 'Trevas', 'DIVINE': 'Divino', 'EARTH': 'Terra', 'FIRE': 'Fogo', 'LIGHT': 'Luz', 'WATER': 'Água', 'WIND': 'Vento',
    },
    types: {
      'Effect Monster': 'Monstro de Efeito', 'Spell Card': 'Carta de Magia', 'Trap Card': 'Carta de Armadilha', 'Normal Monster': 'Monstro Normal', 'Fusion Monster': 'Monstro de Fusão', 'Link Monster': 'Monstro Link', 'Pendulum Effect Monster': 'Monstro de Efeito Pêndulo', 'Ritual Monster': 'Monstro de Ritual', 'Synchro Monster': 'Monstro Sincro', 'Token': 'Ficha', 'Tuner Monster': 'Monstro Regulador', 'XYZ Monster': 'Monstro XYZ', 'Flip Effect Monster': 'Monstro de Efeito de Virar',
    },
    ui: {
      searchPlaceholder: "Procure por cards...",
      searchButton: "Buscar",
      filtersTitle: "Filtros",
      clearAllButton: "Limpar Tudo",
      itemsPerPage: "Itens por Página",
      cardType: "Tipo de Carta",
      availableCards: "Cards Disponíveis",
      noCardsFound: "Nenhum card encontrado com os filtros selecionados.",
      loading: "Buscando cartas...",
      previousPage: "Anterior",
      nextPage: "Próxima",
      goToPage: "Ir",
      page: "Página",
      of: "de",
      approx: "(aprox.)",
      description: "Descrição",
      originalDescription: "(Descrição original em Inglês)",
      translationUnavailable: "[Tradução automática não disponível para este campo]",
    }
  },
  en: {
    attributes: {
      'DARK': 'Dark', 'DIVINE': 'Divine', 'EARTH': 'Earth', 'FIRE': 'Fire', 'LIGHT': 'Light', 'WATER': 'Water', 'WIND': 'Wind',
    },
    types: {
      'Effect Monster': 'Effect Monster', 'Spell Card': 'Spell Card', 'Trap Card': 'Trap Card', 'Normal Monster': 'Normal Monster', 'Fusion Monster': 'Fusion Monster', 'Link Monster': 'Link Monster', 'Pendulum Effect Monster': 'Pendulum Effect Monster', 'Ritual Monster': 'Ritual Monster', 'Synchro Monster': 'Synchro Monster', 'Token': 'Token', 'Tuner Monster': 'Tuner Monster', 'XYZ Monster': 'XYZ Monster', 'Flip Effect Monster': 'Flip Effect Monster',
    },
    ui: {
      searchPlaceholder: "Search for cards...",
      searchButton: "Search",
      filtersTitle: "Filters",
      clearAllButton: "Clear All",
      itemsPerPage: "Items per Page",
      cardType: "Card Type",
      availableCards: "Available Cards",
      noCardsFound: "No cards found with the selected filters.",
      loading: "Searching for cards...",
      previousPage: "Previous",
      nextPage: "Next",
      goToPage: "Go",
      page: "Page",
      of: "of",
      approx: "(approx.)",
      description: "Description",
      originalDescription: "(Original Description)",
      translationUnavailable: "[Automatic translation unavailable for this field]",
    }
  }
};

export const translate = (key, category, language) => {
  return dictionary[language]?.[category]?.[key] || key;
};