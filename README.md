<h1> TrybeSmith </h1>

Uma loja de itens medievais, no formato de uma API, utilizando Typescript.

<br>

### Imagens Exemplo

![login trybesmith](https://user-images.githubusercontent.com/99821267/195433724-a8290110-8d66-454d-9c46-41eb65f288c6.png)

![produtos trybesmith](https://user-images.githubusercontent.com/99821267/195433737-93bc1853-1081-4b7d-a461-6b204c38f2bb.png)

<br>

## Instalação

<details>
  <summary><strong>🐳 Rodando com Docker </strong></summary><br /> 

  > Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queira fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `trybesmith` e outro chamado `trybesmith_db`.
  - A partir daqui você pode rodar o container `trybesmith` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybesmith bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
  
  > Instale as dependências com `npm install`
  
   > npm run dev
   

  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  ⚠ Atenção ⚠ Caso você esteja usando macOS e ao executar o `docker-compose up -d` se depare com o seguinte erro:

  ~~~bash
  The Compose file './docker-compose.yml' is invalid because:
  Unsupported config option for services.db: 'platform'
  Unsupported config option for services.node: 'platform'
  ~~~

> Foram encontradas 2 possíveis soluções para este problema:
> 1. Você pode adicionar manualmente a option `platform: linux/amd64` no service do banco de dados no arquivo docker-compose.yml do projeto, mas essa é uma solução local e você deverá reproduzir isso para os outros projetos.
> 2. Você pode adicionar manualmente nos arquivos .bashrc, .zshenv ou .zshrc do seu computador a linha `export DOCKER_DEFAULT_PLATFORM=linux/amd64`, essa é uma solução global.
> As soluções foram com base [nesta fonte](https://stackoverflow.com/a/69636473).



✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

<img src="images/remote-container.png" width="800px" >

---
  
</details>

<details>
  <summary><strong>🖥️ Rodando na máquina </strong></summary><br />   
  
  > Configurar o arquivo .evn.example com sua conexão ao MySQL.
  
  > Instale as dependências com `npm install`
  
  > npm run dev

  ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  ✨ **Dica:** versão do node precisa estar na versão 16.

</details>

<details>

<summary>Rodar Lint </summary>

> npm run lint

</details>

<br>

<h2>Rotas </h2>

### Produtos
<details>
 <summary>POST /products</summary>
 
- Cadastrar um produto
- O corpo da requisição deverá seguir o formato abaixo:
 
```JSON
   {
    "id": 1,
    "name": "Poção de cura",
    "amount": "20 gold",
  }
 
```

</details>

<!-- ------------------------------------------------------------------- -->

<details>
 <summary>GET /products</summary>
 
- Lista todos os produtos

</details>

<br>

<!-- ------------------------------------------------------------------- -->

<!-- ------------------------------------------------------------------- -->

### Usuário

<details>
 <summary>POST /users</summary>
 
- Cadastrar usuário
- O endpoint deve receber a seguinte estrutura:

```JSON
{ 
  "username": "MAX",
  "classe": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}
 
```

</details>

<br>

<!-- ------------------------------------------------------------------- -->

<!-- ------------------------------------------------------------------- -->


### Pedidos

<details>
 <summary>GET /orders</summary>
 
- Listar todos os pedidos 

</details>

<!-- ------------------------------------------------------------------- -->

<details>
 <summary>POST /orders</summary>
 
- Listar todos os pedidos 
- O endpoint deve receber a seguinte estrutura:

 ```JSON
  {
    "productsIds": [1, 2]
  }
 
``` 

- Deve estar logado com um token ativo: (exemplo de token)
 
 ```JSON
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
 
``` 

</details>

<br>

<!-- ------------------------------------------------------------------- -->

<!-- ------------------------------------------------------------------- -->

### Login

<details>
 <summary>POST /login</summary>
 
- Fazer login
- O endpoint deve receber a seguinte estrutura:
 
```JSON
{
   "username": "string",
   "password": "string"
}
 
```

</details>

<br>

<hr>


<h2> Tecnologias e bibliotecas usadas </h2>

<!-- ------------------------------------------------------------- -->


- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [MYSQL](https://www.mysqltutorial.org/)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [sequelize](https://sequelize.org/)
- [jwt (Autenticação)](https://jwt.io/)
- [Docker](https://www.docker.com/)
- [Joi](https://joi.dev/api/?v=17.6.1)
- [TypeCcript](https://www.typescriptlang.org/)


## Autor 
- [Matheus](https://github.com/MatheusNF123)
