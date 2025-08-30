
Alesson Medeiros

DESAFIO FRONT END - YU-GI-OH STORE:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Esta aplicação web foi desenvolvida como parte do processo seletivo para a vaga de Front-end na FPR Soluções. O projeto consiste em uma loja de cards de Yu-Gi-Oh!, implementada com base em um layout do Figma e consumindo a 
API pública `YGOPRODeck`. O resultado é uma interface rica, dinâmica e que não apenas cumpre, mas expande os requisitos originais, entregando uma experiência de usuário completa e profissional.

TECNOLOGIAS UTILIZADAS:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Para a construção do projeto, foram empregadas tecnologias modernas do ecossistema JavaScript, com foco em performance e componentização. A base da aplicação foi construída com React, utilizando React Router DOM
para o gerenciamento de rotas e navegação fluida entre páginas. O gerenciamento de estado global foi centralizado através da **React Context API**, garantindo que componentes como o carrinho e os filtros se comuniquem de forma
eficiente. A estilização foi desenvolvida com Tailwind CSS v3, permitindo a criação de uma interface responsiva e fiel ao design de forma ágil. A comunicação com a API externa foi realizada com a biblioteca Axios, e a persistência
de dados do carrinho no navegador foi garantida pelo uso do localStorage.

FUNCIONALIDADES IMPLEMENTADAS:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

A aplicação entrega uma experiência de e-commerce completa e rica em detalhes, com diversas funcionalidades que superam os requisitos básicos do desafio.

A navegação principal na Home Page oferece uma listagem de cartas com um sistema de Paginação Avançada, que não só permite avançar e retroceder, mas também pular para uma página específica e visualizar o número total aproximado 
de páginas. A busca por nome de carta no cabeçalho é dinâmica e integrada ao sistema de filtros.

O sistema de filtros foi implementado de forma altamente interativa. Os atributos das cartas são selecionáveis através de uma Barra de Icones Visual no Header, que destaca os filtros ativos. Os tipos de carta podem ser selecionados
em uma Barra lateral com Checkboxes, permitindo a seleção múltipla e combinada de filtros para refinar a busca com precisão. Um botão de "Limpar Filtros" reseta todas as seleções de forma prática.

A interação do usuário foi um ponto de foco, indo além dos modais básicos. Foi implementado um Modal de Detalhes, que exibe a imagem expandida e a descrição completa da carta ao clicar em sua imagem, tanto na Home quanto no Carrinho. 
A ação de compra aciona um Modal de confirmação inteligente: ele não apenas confirma a adição, mas permite ao usuário selecionar a quantidade. Caso a carta já exista no carrinho, o modal inteligentemente se adapta, informando o 
usuário e perguntando se deseja adicionar mais unidades.

A página de Carrinho de Compras é totalmente funcional, exibindo o resumo detalhado da compra com o valor total calculado em tempo real. Uma funcionalidade adicional implementada é a capacidade de editar a quantidade de cada item 
diretamente no carrinho, oferecendo total controle ao usuário.

Para enriquecer ainda mais a interface, um Banner Rotativo automático foi adicionado à Home. Além disso, a aplicação conta com um Sistema de Internacionalização (PT/EN), que permite ao usuário alternar o idioma da interface e dos 
dados recebidos da API, incluindo nomes e descrições das cartas. Todo o design é Responsivo, adaptando-se de forma elegante a resoluções de desktop (1920px e 1366px) e mobile.

COMO RODAR O PROJETO:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Para executar o projeto localmente, o primeiro passo é clonar o repositório para sua máquina utilizando o comando "git clone https://github.com/alessoul/yugioh-card-store". Em seguida, navegue para a pasta do projeto que foi criada 
usando o terminal com o comando "cd yugioh-store". Uma vez dentro da pasta, instale todas as dependências necessárias executando `npm install`. Após a conclusão da instalação, inicie a aplicação com o comando `npm start`. 
A aplicação estará então disponível no seu navegador no endereço "http://localhost:3000".
