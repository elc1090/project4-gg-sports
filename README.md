# project4-gg-sports
project4-gg-sports created by GitHub Classroom# Preencha aqui o título do projeto

> 1. Baixe este arquivo e edite o texto em formato Markdown conforme as instruções a seguir.
> 2. Substitua todos os blocos "Preencha aqui" por informações do seu projeto. 
> 3. Substitua a imagem por pelo menos um screenshot do projeto (arquivo pode ser armazenado no repositório ou em URL externa). GIFs animados também são permitidos!
> 4. Remova todas as instruções de entrega.
> 5. Double-check: Certifique-se de que seu README.md não contenha instruções de entrega!
> 6. Entregue este README.md dentro da pasta raiz do seu repositório de entrega. 

> Opcional: você pode alterar a formatação do README, mas mantenha todas as informações solicitadas

![Screenshot do projeto](https://mdswanson.com/static/chops-ux-step-4.png "Screenshot do projeto").

#### Descrição

Dashboard para consulta de dados de campeonatos de futebol

#### Deploy

[GG Sport](https://elc1090.github.io/project4-gg-sports/)

#### Testes

Preencha aqui sugestões de tarefas a serem realizadas por usuários testadores (por exemplo, cadastro de usuário, inserção de dados, busca, etc.).

#### Desenvolvedor(es)
Gabriel Caetano e Gustavo Reis

#### Tecnologias

Back end:
- NodeJS
- Typescript
- ExpressJS
- Prisma ORM
  
Banco de dados:
- Postgress
  
Deploy:
- Render
- AWS RDS

#### Ambiente de desenvolvimento

Preencha aqui uma lista detalhada de ferramentas de desenvolvimento usadas

#### Créditos

Preencha aqui uma lista detalhada de recursos aproveitados no projeto, por exemplo:
- continuação do trabalho 3
- API de dados de futebol Sportradar

#### Bastidores


Sobre a busca dos dados das ligas, por ser muitos dados se tornou uma requisição bastante demorada, por estar sendo feita de forma sequencial, mas uma alteração que será feita é a refatoração do código e paralelização das requisições que não houverem dependência entre si, em outro projeto similar foi feita essa refatoração e o tempo de execução da requisição foi reduzida em aproximadamente 95% (o que antes levava mais de 10 minutos passou a demorar menos de 1 minuto)


---
Projeto entregue para a disciplina de [Desenvolvimento de Software para a Web](http://github.com/andreainfufsm/elc1090-2023a) em 2023a
