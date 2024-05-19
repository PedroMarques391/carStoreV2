# carStore V2

Este projeto é uma versão aprimorada do site [carStore](https://pedromarques391.github.io/carStore/). O repositório do projeto pode ser acessado [aqui](https://github.com/PedroMarques391/carStore). O site original foi desenvolvido há 5 meses.

## Tecnologias Utilizadas

O site foi desenvolvido utilizando as seguintes tecnologias:

- **TypeScript**
- **React.js**
- **Next.js**
- **TailwindCSS**
- **Firebase** (incluindo storage, autenticação e Firestore)

### Pacotes Auxiliares

Para acelerar o desenvolvimento, foram utilizados os seguintes pacotes:

- [**react-hook-form**](https://react-hook-form.com/get-started) para manipulação e validação de formulários
- **@hookform/resolvers** com **Zod** para validação de schemas
- [**react-toastify**](https://fkhadra.github.io/react-toastify/installation) para adicionar notificações à aplicação
- [**Swiper**](https://swiperjs.com/get-started) para facilitar a manipulação de slides

### Metodologia de Desenvolvimento

Foi adotada a metodologia **mobile-first**, assegurando que o site seja totalmente responsivo.

## Estrutura do Site

O site possui as seguintes rotas principais:

- **Home**: Página principal com formulário de pesquisa de veículos, filtragem por tipo de carroceria e exibição dos seis últimos veículos adicionados.
- **Garage**: Página que exibe todos os veículos cadastrados no banco de dados, permitindo ao usuário alterar a ordem de exibição (do mais recente ao mais antigo).
- **About**: Página com informações gerais sobre a loja, incluindo data de inauguração, missão, visão, valores e localização no Google Maps.
- **LGPD**: Página de informações com componentes de FAQ respondendo às principais perguntas sobre LGPD.
- **Terms**: Página que exibe todos os termos e condições do site.
- **Privacy**: Página com informações sobre a política de privacidade do site.

### Rotas Privadas

Existem duas rotas privadas:

- **Dashboard**: Exibe todos os carros cadastrados pelo usuário, o usuário também pode excluir os veículos.
- **New**: Formulário para cadastro de novos veículos.

### Rotas Auxiliares Dinâmicas

Além das rotas principais, existem as seguintes rotas auxiliares dinâmicas:

- **garage/search/category/:query**: Página dedicada aos veículos da categoria selecionada (sedan, hatch, SUV, picapes).
- **garage/search/:query**: Página dedicada aos resultados da pesquisa de veículos.
- **garage/car/:id/:name**: Página dedicada aos detalhes de um veículo, obtidos do banco de dados através do ID e do nome.

Adicionalmente, há uma página personalizada de **NotFound**, que redireciona o usuário para a página principal e oferece opções de navegação para diferentes categorias de carros.

## Reutilização de Código

Para promover a reutilização de código, a maior parte da manipulação do banco de dados é realizada dentro de um contexto, **carContext**, e acessada através de um hook, **useCar**.

## Administração e Usuários

O site foi projetado para ser administrado por uma única pessoa. No entanto, um componente para criação de usuários pode ser facilmente adicionado.

### Firebase

Foram utilizadas as seguintes funcionalidades do Firebase:

- **firebase/authentication**: Para criação e gerenciamento de usuários.
- **firebase/firestore**: Para cadastro dos veículos no banco de dados.
- **firebase/storage**: Para armazenamento das imagens dos veículos.

## Informações Adicionais

- As informações de contato e endereço são fictícias e foram geradas por IA.
- As informações dos veículos são reais, mas as fotos foram retiradas de anúncios de sites reais e/ou do Google.
- O número registrado para o usuário principal é fictício, portanto, ao clicar para falar com o vendedor na página **garage/car/:id/:name**, o usuário não será redirecionado. O site foi inspirado no famoso site de revenda [WebMotors](https://www.webmotors.com.br/), sendo que algumas partes podem ser semelhantes.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

---

Este projeto representa uma evolução significativa do carStore original, incorporando novas tecnologias e funcionalidades para melhorar a experiência do usuário e a administração do site.