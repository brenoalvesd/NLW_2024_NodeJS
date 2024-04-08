# Projeto pass.in NLW Unite 2024

<h2> Trilha Node.js


## Do que se trata

### pass.in

O **pass.in** é uma aplicação focada na **gestão de participantes em eventos presenciais**. Ela oferece uma solução prática para que organizadores possam cadastrar eventos e criar páginas públicas de inscrição. Os participantes inscritos têm a possibilidade de emitir credenciais para o check-in no dia do evento, enquanto o sistema gerencia a entrada por meio de um scan das credenciais.

### Tecnologias Utilizadas

A stack de tecnologia escolhida para este projeto inclui:

- **Node.js**: Plataforma de desenvolvimento no lado do servidor baseada em JavaScript.
- **TypeScript**: Extensão de linguagem para JavaScript que adiciona tipos estáticos, melhorando a segurança e a previsibilidade do código.
- **Prisma**: ORM que facilita a interação com o banco de dados, garantindo a integridade dos dados e a eficiência das operações.
- **Zod**: Ferramenta de validação de dados para TypeScript, garantindo que os dados estejam corretos e seguros antes de serem processados.
- **Fastify**: Um framework web moderno para Node.js, focado em performance e velocidade de desenvolvimento.

## Requisitos

### Funcionalidades

- [ ] Organizadores podem cadastrar um novo evento com Título, Detalhes, Slug e Limite de participantes.

- [ ] O organizador pode visualizar dados de um determinado evento através de seu ID.

- [ ] O organizador pode visualizar a lista de participantes do evento através do ID do respectivo evento que ele deseja consultar.

- [ ] Participantes podem se inscrever em eventos preenchendo seus dados (nome, e-mail).

- [ ] O participante pode visualizar seu crachá de inscrição, que conterá o seu nome, e-mail, ID, o ID do evento que ele se inscreveu e a data e hora de sua inscrição.

- [ ] Participantes podem realizar o check-in no evento usando suas credenciais.

### Regras de Negócio

- [ ] Cada participante pode se inscrever apenas uma vez em cada evento.
- [ ] As inscrições estão abertas apenas para eventos que ainda possuem vagas.
- [ ] O check-in no evento é único para cada participante.


## Minha Experiência com Esse Projeto

Essa foi minha primeira experiência codificando em TypeScript utilizando o Node.js e outras ferramentas como Prisma, Zod e Fastify. Foi um evento desafiado, mas extremamente recompensador, marcado por vários pontos de crescimento:

- **Adaptação à uma Nova Linguagem e Dependências**: Aprender TypeScript enquanto desenvolvia um projeto real que desfruta de diferentes dependências me ajudou à visualizar o quanto o mundo da programação é profundo e interessante.

- **Arquitetura e Organização**: A oportunidade de desenhar uma arquitetura robusta e escalável usando Node.js e TypeScript trouxe uma ampla visão sobre boas práticas.

- **Entendimento de ORM**: Utilizar o Prisma para interagir com o banco de dados foi transformador, mostrando a eficiência que um ORM (Object-Relational Mapping) pode trazer ao projeto.

- **Validação de Dados com Zod**: Compreendi a importância da validação de dados na entrada do sistema com o Zod para prevenir erros e inconsistências.

- **Desenvolvimento Web com Fastify**: Experimentei a facilidade e a velocidade que o Fastify oferece para o desenvolvimento de APIs, o que foi fundamental para o progresso rápido do projeto.

- **Qualidade > Quantidade**: O projeto reiterou a importância de manter um alto padrão de qualidade em todas as etapas do desenvolvimento, desde a escrita do código até a nomeação de variáveis, interfaces e serviços.

- **Tratativa de Erros**: Aprender a gerenciar exceções e erros de forma adequada foi uma lição valiosa sobre como melhorar a experiência do usuário e a confiabilidade do sistema.