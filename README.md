# E-commerce Frontend

Pequena aplicação frontend de loja virtual desenvolvida para praticar e demonstrar o consumo de uma API fictícia e simples utilizando o **JSON Server** (`db.json`).

## Tecnologias e Bibliotecas

- **React 19** + **TypeScript** + **Vite** — base da aplicação e build rápido
- **Tailwind CSS** — estilização da interface, desenvolvida com o auxílio da IA **Claude Opus 4.6**
- **JSON Server** + **Axios** — simulação de API REST local (`http://localhost:3000`) e requisições HTTP
- **React Router DOM** — navegação entre vitrine (`/`), página do produto (`/products/:id`) e carrinho (`/cart`)
- **Context API** — gerenciamento do estado global do carrinho e cálculo de totais
- **React Hot Toast** & **React Icons** — notificações de feedback e ícones

## Problemas que este projeto ajuda a resolver

- **Prototipagem sem backend pronto:** permite validar fluxos de catálogo, detalhes de produto e carrinho de compras antes da criação de uma API real.
- **Testes rápidos de integração:** facilita simular chamadas REST com dados estruturados em JSON de forma leve e previsível.
- **Base de aprendizado e MVP:** serve como ponto de partida enxuto para projetos de estudo, portfólio ou demonstrações rápidas de e-commerce.

## Como executar

```bash
# Instalar dependências
npm install

# Subir a API fictícia (porta 3000)
npx json-server db.json

# Em outro terminal, iniciar o frontend
npm run dev
```
