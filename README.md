# dbcatalog
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Daniel-BS-Dev/bootcamp-devsuperior/blob/main/LICENSE)

# Sobre o Projeto

dbcatalog é uma aplicação desenvolvida durante o Bootcamp da devsuperior escola de preparação profissional, onde teremos um catalogo de produtos. O usuário logado com perfil admin
poderá fazer ações como: excluir, adicionar e editar. Isso para categorias, usuários e produtos. Já o usuário de perfil operator não terá acesso a rota de usuários apenas produtos 
e categorias. Usuários sem logar poderá apenas ver a listagem de produtos ou os detalhes de uma produto


# Modelo Conceitual
![crud](https://user-images.githubusercontent.com/81425846/150442791-350f467b-783f-42f4-ab75-c2baae2a4369.png)

# Front end 
![tela](https://user-images.githubusercontent.com/81425846/150443929-da3ba636-c649-4d16-8bd2-e37ead8af383.png)
![list](https://user-images.githubusercontent.com/81425846/150443935-8fcae210-7783-412d-86ec-513ee2f05bd4.png)
   
 # Tudo que Aprendi
 
  Esse Bootcamp foi devidido em 12 capitulos abaixo colocarei a lista de conteúdo apresentado e aprendido durante o mesmo:
  
  ## 1. Capítulo foi apresentado os conceitos de como fazer um crud completo
  
  ### Competências
  - Criar projeto Spring Boot
  - Criar monorepo Git
  - Organizar o projeto em camadas
  - Controlador REST
  - Serviço
  - Acesso a dados (Repository)
  - Criar entidades
  - Configurar perfil de teste do projeto
  - Seeding da base de dados
  - Criar web services REST
  - Parâmetros de rota @PathVariable
  - Parâmetros de requisição @RequestParam
  - Corpo de requisição @RequestBody
  - Resposta da requisição ResponseEntity<T>
  - Padrão DTO
  - CRUD completo
  - Tratamento de exceções
  - Postman (coleções, ambientes)
  - Dados de auditoria
  - Paginação de dados
  - Associações entre entidades (N-N)
  
  ## 2. Capítulo Testes automatizados no back end

    ### Competências
      - Fundamentos de testes automatizados
      - Tipos de testes
      - Benefícios
      - TDD - Test Driven Development
      - Boas práticas e padrões
      - JUnit
      - Básico (vanilla)
      - Spring Boot
      - Repositories
      - Services
      - Resources (web)
      - Integração
      - Mockito & MockBean
      - @Mock
      - @InjectMocks
      - Mockito.when / thenReturn / doNothing / doThrow
      - ArgumentMatchers
      - Mockito.verify
      - @MockBean
      - @MockMvc
      * Etapas
         - Fundamentos + JUnit vanilla (exercício de fixação)
         - Testes de repository (exercício de fixação)
         - Testes de unidade com Mockito (exercício de fixação)
         - Testes da camada web com MockMvc (exercício de fixação)
         - Testes de integração
         - Desafio TDD (desafio final para entregar)

  
  ## 3. Capítulo foi visto sobre validação e segurança
  
  ### Competências
   - Modelo de dados de usuários e perfis
   - Validação com Bean Validation
   - Annotations
   - Customizando a resposta HTTP
   - Validações personalizadas com acesso a banco
   - Autenticação e autorização
   - Spring Security
   - OAuth 2.0
   - Token JWT
   - Autorização de rotas por perfil
   - Dicas para Postman
   - Variáveis de ambiente no projeto com coalescência
   
   ## 4. Capítulo foi apresentado um outro projeto com objetivo de aprendermos outra formas de implementação com as seguintes regras:
   ### O sistema consiste em uma plataforma de ensino que mantém informações de cursos, suas turmas e alunos, bem como um fórum para perguntas e respostas sobre os 
   ### conteúdos do curso. Os atores do sistema podem ser alunos e professores. Há também usuários administradores, que são os únicos autorizados a cadastrar cursos e turmas.
   
   * Domínio e ORM
     - Implementação de um modelo de domínio complexo (projeto DSLearn)
     - Instanciação (seed) de um modelo de domínio com SQL
   * Autorizações
     - Autorização customizada em nível de serviço
     - Conteúdo customizado para o usuário logado
     - Refresh token
     - Pré-autorização de métodos
     
   ## 5 Capitulo Consultas ao banco de dados:
    ### Competências
   * SQL e JPQL
     - Revisão SQL, referências, exercícios
     - Estudos de caso SQL e JPQL
     - Projeção, restrição, escalares
     - Joins
     - Group by
     - União
     - Diferença
   * Spring Data JPA
     - Query methods
     - Estudo de caso: busca detalhada com parâmetros opcionais e paginação
     - Problema N+1 consultas
     
     ## 6. Capítulo Deploy
    ### Competências
     * Docker
       - Conceitos
       - Comandos
       - Imagens e Dockerfile
       - Instanciação de containers
       - Volumes
       - DockerHub
     * Implantação manual na AWS
       - EC2
       - RDS
       - Conectando remotamente
      * CI/CD
       - Heroku
       - AWS
       - Github Actions
       - Stage de homologação
       - Elastic Beanstalk
       
       ## 7. Capítulo Layout e navegação
        ### Competências
         - ReactJS
         - Criação de projeto
         - Estrutura do projeto
         - Componentes
         - Importações
         - Uso de imagens
         - Layout
         - HTML
         - CSS
         - Estilização manual
         - Flexbox
         - Bootstrap
         - Responsividade
         - Execução de projeto Figma
         - Rotas
         - React Router DOM
         - Rotas e links
         
         ## 8. Capítulo Interação com a API
          ### Competências
         - Props
         - Mais sobre layout
         - Tela ProductDetails
         - Tela Catalog
         - Tela Admin
         - Mais sobre Rotas
         - Parâmetros de URL
         - Hierarquias (nesting)
         - Redirecionamentos
         - Integração com back end
         - Axios
         - React Hooks
         - useState
         - useEffect
         - Efeitos: “loaders”
         - Formulários “raiz”
         - Tratamento de eventos
         - Manipulação do estado do formulário
         - Submissão de formulário
         
         ## 9. Capítulo Autenticação e autorização
          ### Competências
          - Formulários
          - React Hook Form
          - Validação de formulário, expressões regulares
          - Mensagens de erro e estilização condicional
          - Login OAuth2
          - Interceptors
          - LocalStorage
          - Acesso a dados
          - JSON parse / stringify
          - Estado global com Context API
          - Fluxos de autenticação e autorização
          - Rotas protegidas
          - Redirecionamentos de login e de autorização
          - Redirecionamentos especiais para experiência do usuário (UX)
          - Permissionamento em nível de rotas
          - Restrição de conteúdo (UI) baseada em perfil de usuário
          
          ## 10. Capítulo CRUD, paginação, filtros
          ### Competências
           - CRUD responsivo
           - Listagem de dados
           - Formulário
           - Inserção, edição e remoção
           - Comunicação entre componentes com eventos (padrão observer)
           - React Hook Form
           - Integração de libs com React Hook Form
           - React Select
           - React Currency Input Field
           - Outras libs
           - React Pagination
           - React Toastfy
           - Filtragem de dados
           - Controle de referência com hook useCallback
           
           ## 11. Capítulo Testes e implantação
            ### Competências
            - JEST e Testing Library
            - Testes de funções JS/TS
            - Execução de testes, modo watch
            - Bloco describe e suíte de testes
            - Mock de funções com spyOn
            - Testes de componentes React
            - Testes de unidade e de integração
            - Mock de funções com jest.fn()
            - Mock de requisições com MSW
            - Mock do React Router DOM
            - Simulação de interação do usuário
            - Fixtures
            - Inputs de formulário
            - Submissão de formulário
            - Implantação com CI/CD
            - Netlify
            
            ## 12. Capitulo Dashboard
              ### Competências
               - Biblioteca Apex Charts
               - Gráfico de rosca
               - Gráfico de coluna/barra
               - Sumário de dados
               - Tabelas de dados
               - Criação e integração de componentes de filtragem

   
# Tecnologias Utilizadas 
### Back end
   - Java 11
   - Spring Boot
   - Postman
   
### Front end
   - HTML/ Css / TypeScript
   - Reactjs
   - Vs Code
   - yarn
   - Bootstrap
   - nodejs
   

### Implantação produção
   - Backend: Heroku
   - Frontend: Netlify
   - Banco de dados: Postgresql

   
 #### Link do projeto: https://dbcatalog.netlify.app



# Autor 

Daniel Benedito da Silva

Email: danielbenedito263@gmail.com
