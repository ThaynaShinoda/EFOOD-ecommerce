# EFOOD

EFOOD é uma plataforma de e-commerce para restaurantes, desenvolvida com React, TypeScript, Redux Toolkit e Vite. O projeto simula um marketplace onde usuários podem visualizar restaurantes, explorar cardápios, adicionar itens ao carrinho e finalizar pedidos.

## Funcionalidades

- Listagem de restaurantes com destaque e filtros por tipo.
- Visualização detalhada do restaurante e seu cardápio.
- Adição de produtos ao carrinho com modal de confirmação.
- Carrinho lateral com edição e remoção de itens.
- Checkout com formulário validado para entrega e pagamento.
- Integração com API fake para simulação de pedidos.
- Layout responsivo e estilização com styled-components.
- Feedback visual de carregamento e mensagens de sucesso/erro.

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router DOM](https://reactrouter.com/)
- [Formik](https://formik.org/) & [Yup](https://github.com/jquense/yup) (validação de formulários)
- [Styled-components](https://styled-components.com/)
- [Vite](https://vitejs.dev/)
- [React Spinners](https://www.davidhu.io/react-spinners/)
- [IMask](https://imask.js.org/) (máscara de inputs)

## Estrutura do Projeto

```
src/
  assets/           # Imagens e recursos estáticos
  components/       # Componentes reutilizáveis (Banner, Cart, Footer, Header, etc)
  pages/            # Páginas principais (Home, RestaurantPage)
  redux/            # Store e slices do Redux
  services/         # Serviços de API (RTK Query)
  styles/           # Estilos globais e variáveis de cor
  utils/            # Funções utilitárias
  routes.tsx        # Definição das rotas
  App.tsx           # Componente raiz
  main.tsx          # Ponto de entrada da aplicação
```

## Como rodar o projeto

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/efood.git
   cd efood
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```

4. **Acesse:**  
   Abra [http://localhost:5173](http://localhost:5173) no navegador.

## Scripts disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento.
- `npm run build` — Gera a build de produção.
- `npm run preview` — Visualiza a build de produção localmente.
- `npm run lint` — Executa o ESLint.

## Configuração de Lint e Formatação

- ESLint com regras para React, TypeScript, import, acessibilidade e integração com Prettier.
- Prettier para padronização de código.

## Observações

- O projeto utiliza uma [API fake](https://fake-api-tau.vercel.app/api/efood) para simulação de dados.
- O layout é responsivo e otimizado para dispositivos móveis.
- Os dados de cartão e endereço não são enviados para nenhum serviço real.

---

Desenvolvido para fins educacionais na EBAC
