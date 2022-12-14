Parte front-end da aplicação clínica_de_saúde... Faz parte de uma atividade do curso Explorer da Rocketseat (um projeto pessoal) - Parte visual do aplicativo fullness clinic (FRONT-END)

<p align="center">
  <img width="800" src="src/assets/imageapp.jpg" >
</p>


Nesse aplicativo usamos as seguintes técnicas:

- Componentes
- Migrations na parte de back-end
- Criação de interfaces com react-js
- Uso de estados (useState)
- Uso de hooks (useEffect, useRef)
- Uso de ícones (react-icons)
- Uso de bibliotecas como moment, express, etc.

Para utilizar o projeto como desenvolvedor siga os seguintes passos:

1. Você precisa ativar o servidor tanto no arquivo front-end como no back-end com o comando "npm run dev"

2. Na parte de back-end, você pode apagar o database e depois que ativar novamente o servidor com o comando "npm run dev" o database será criado novamente e a tabela 'users', mas também será necessário posteriormente usar o comando "npm run migrate" para criar as migrations (pois outras tabelas criadas com esse método) que utilizam o knex.

3. Após os servidores estarem ativados, podemos usar as rotas. Para utilizar o usuário de profissional da aplicação é importante usar o insomnia para criar um usuário para o profissional, pois não existe uma rota na aplicação pra criar esse usuário de profissional, existe apenas as rotas para criar contas para o cliente na aplicação - a rota para ser utilizada no insomnia para criar a conta do profissional é "localhost:3333/professionals" e os dados precisam ser inseridos em formato JSON (segue exemplo abaixo): 

<p align="center">
  <img width="800" src="src/assets/insomnia.jpg" >
</p>

{
	"name": "Marcos",
	"email": "marcos@email.com",
	"password": "123456"
}