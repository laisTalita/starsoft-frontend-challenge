Interface marketplace de nfts

Funcionalidades implementadas:

- Listagem de itens
  A tela inicial exibe os nfts para o carregamento rapido.

- Carrinhho de compras
  Permite a adicão de items no carrinho, remoção e exclusão.

- Pagina de detalhes
  Cada nft possui uma pagina com detalhes adicionais.

- Modal de confirmação
  Ao adicionar um item, é exibido um modal com resumo dos produtos no carrinho, serve como confirmação visual para o usuário final.

Tecnologias utilizadas:

- Next.js (base do projeto + SSG ter um carregamento inicial mais rápido)

- React

- Redux Toolkit ( para o gerenciamento de estado global)

- React Query (fetch e hidratação de dados com prefetchQuery)

- Framer Motion (animações e interações)

- SASS (facil manipulação)

- Docker + Docker Compose

- Jest + React Testing Library (fiz para testes unitarios em componentes críticos, ou que se repetem muito em diversos outros componentes.)

- TypeScript ( pela tipagem e robustez)

Configurações:

comando para o Docker: docker compose up
sem o Docker : npm run dev
para ver os testes : npm run test ou npm run ci (teste jest + lint)

Melhorias:
Bom, como melhoria, acho que o uso do Framer Motion, pois foi a primeira vez que utilizei, então com certeza vai ser algo melhorado.
Apesar do site estar funcional e atender aos requisitos, sempre dá pra melhorar.
