# Meu Portfólio de Filmes 🎬

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

**Status do Projeto: 🚧 Em Construção 🚧**

---

### Tabela de Conteúdos
* [📖 Sobre o Projeto](#-sobre-o-projeto)
* [✨ Funcionalidades](#-funcionalidades)
* [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
* [🚀 Como Executar o Projeto](#-como-executar-o-projeto)
* [📁 Estrutura de Arquivos](#-estrutura-de-arquivos)
* [✍️ Autor](#️-autor)

---

### 📖 Sobre o Projeto

Este projeto foi desenvolvido como um exercício prático para aprofundar os conhecimentos em **desenvolvimento mobile com React Native e Expo**. O resultado é um aplicativo de tela única, elegante e funcional, que exibe uma lista de filmes favoritos a partir de uma fonte de dados local.

O foco foi aplicar conceitos fundamentais como a criação de componentes, estilização com `StyleSheet`, manipulação de dados estáticos, uso de imagens locais e de rede, e a implementação de interatividade para o usuário.

---

### ✨ Funcionalidades

- **Interface de Usuário Moderna:** Design sofisticado com tema escuro de alto contraste para uma leitura confortável.
- **Lista Dinâmica e Rolável:** Exibição de uma lista de filmes a partir de um arquivo de dados local, com rolagem vertical suave.
- **Cartões Detalhados:** Cada filme é apresentado em um cartão com capa, título, resumo, ano de lançamento e plataformas de streaming.
- **Carregamento Híbrido de Imagens:** Capacidade de carregar imagens tanto de URLs da internet quanto de arquivos locais do projeto.
- **Interatividade:** Botões que levam o usuário a uma página web com mais detalhes sobre o filme, utilizando o `Linking` do Expo.
- **Ícones e Efeitos Visuais:** Uso da biblioteca `@expo/vector-icons` e sombras para criar uma interface mais rica e com maior profundidade.

---

### 🛠️ Tecnologias Utilizadas

O projeto foi construído com as seguintes ferramentas e bibliotecas:

| Ferramenta | Descrição |
|-----------|-----------|
| **React Native** | Framework para criar aplicativos nativos usando React. |
| **Expo** | Plataforma que acelera e simplifica o desenvolvimento em React Native. |
| **TypeScript** | Superset do JavaScript que adiciona tipagem estática. |
| **`@expo/vector-icons`** | Biblioteca para usar pacotes de ícones populares (como Font Awesome). |
| **`expo-linking`** | Módulo para interagir com outros aplicativos, como o navegador web. |
| **Flexbox** | Utilizado para criar layouts flexíveis e responsivos. |
| **StyleSheet API** | Usada para criar estilos otimizados e organizados. |


---

### 🚀 Como Executar o Projeto

Para rodar este projeto em seu ambiente local, siga os passos abaixo.

**Pré-requisitos:**
* **Node.js** instalado.
* **Git** instalado.
* **Expo Go** instalado no seu smartphone (Android ou iOS).

**Passos:**
1. Clone o repositório:
   ```bash
   git clone [Thimo08](https://github.com/Thimo08/meu-catalogo-pessoal.git)
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd nome-do-repositorio
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor do Expo:
   ```bash
   npx expo start
   ```
5. Abra o aplicativo **Expo Go** no seu celular e escaneie o QR Code que apareceu no terminal.

---

### 📁 Estrutura de Arquivos

O código-fonte está organizado da seguinte maneira:

```
meu-catalogo-pessoal/
├── assets/              # Contém as imagens locais (capas dos filmes)
├── components/          # Contém os componentes React
│   └── TelaCatalogo.tsx # O único componente, que renderiza toda a tela
├── App.tsx              # Ponto de entrada do aplicativo
├── catalogo.js          # Arquivo de dados com a lista de filmes
└── ...                  # Arquivos de configuração (package.json, babel.config.js, etc.)
```

---

### ✍️ Autor

Feito por **Thimotio Jeronimo**.


