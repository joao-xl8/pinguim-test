readme
Projeto test-pinguim
Aplicação REST utilizando oframework NestJS, usando como referência REST API: https://reqres.in/
ver:1.0.0
________________________________________________________________
Para rodar o projeto, execute os seguintes passos:
________________________________________________________________
Certifique-se de que o Node.js está instalado em sua máquina. Você pode baixá-lo em https://nodejs.org/

Entre na pasta do projeto e instale as dependências:

> cd seu-projeto
> npm install

Para rodar a aplicação em modo de desenvolvimento, execute:

 > npm run start:dev

Para gerar uma build da aplicação, execute:

 > npm run build

Para rodar a aplicação em modo de produção, execute:

 > npm run start:prod

Para rodar os testes da aplicação, execute:

 > npm run test

Para gerar um relatório de cobertura de testes, execute:

 > npm run test:cov

Para verificar a conformidade do código com as regras definidas no ESLint, execute:

 > npm run lint

________________________________________________________________
Testando no Postman
________________________________________________________________

Certifique-se de que o Postman está instalado em sua máquina. Você pode baixá-lo em https://www.postman.com/downloads/

Gerando Token de Acesso
-----------------------

Entre com seu login e senha, caso não possua crie uma conta

Crie uma nova coleção em:

 > Create new Collection

Crie uma nova Requisição em:
 
 > Add request

Cadastre usuário para gerar token de validação:

 > Escolha o método Post
  > Adicione a URL: localhost:3000/auth
   > Em Body, selecione raw e JSON
    > Adicione ao campo o arquivo JSON de usuário:

	{
    		"name":"seunome",
    		"email":"seuemail",
    		"password":"suasenha"
	} 
	
	*substitua os campos seunome, seuemail e seu password por suas informações

Envie o POST clicando em:

 > Send

Validando Token de Acesso
-------------------------

Copie o "acess_token" gerado, sem as aspas iniciais e finais

Vá até a aba "Athorization"

 > Selecione o Type Bearer Token
  > Cole o Token gerado na área de Token

Utilizando Endpoints
--------------------

Com o Token Validado você terá acesso aos Endpoints da aplicação e para requisitá-las pelo Postman siga esses passos:

 > Crie uma nova requisição em sua coleção
  > Certifique-se que na aba Athorization o Tipo Bearer Token está selecionado
   > Nessa mesma aba certifique-se que seu Token está colado na área Token
    > Faça as requisições que desejar

________________________________________________________________
Requisições no Postman
________________________________________________________________
----------------------------------------------------------------
GET
----------------------------------------------------------------

getUsers
	> get
	> localhost:3000/users

getUsersById
	> Get
	> localhost:3000/users/(número Id que deseja procurar)
	* De acordo com a documentação do reqres.in os Id's vão de 1 à 12
	> Send

getUsersByPage
	> Get
	>localhost:3000/users?page=(número da página que deseja procurar)
	* De acordo com a documentação do reqres.in as páginas que geram resultados são a 1 e 2
	> Send

getImage
	> Get
	> localhost:3000/image
	> Send

getImageById
	> Get
	> localhost:3000/image/(número Id que deseja procurar)
	* De acordo com a documentação do reqres.in os Id's vão de 1 à 12
	> Send

getImageByPage
	> Get
	> localhost:3000/image?page=(número da página que deseja procurar)
	* De acordo com a documentação do reqres.in as páginas que geram resultados são a 1 e 2
	> Send


----------------------------------------------------------------
Post
----------------------------------------------------------------

createUser
	> Post
	> localhost:3000/users
	> Body
	> Selecione raw e JSON
	> Adicione ao campo o arquivo JSON de usuário:

	{
    		"name":"Luke",
    		"job":"Jedi",
	} 
	* Essa é só uma sugestão, coloque o mome e o trabalho que desejar
	> Send

createImages
	> Post
	> localhost:3000/image
	> Body
	> Selecione raw e JSON
	> Adicione ao campo o arquivo JSON de usuário:

	{
    		"color": "verde",
    		"type": "Yoda"
	}
	* Essa é só uma sugestão, coloque o mome e o trabalho que desejar
	> Send


----------------------------------------------------------------
Put
----------------------------------------------------------------

updateUser
	> Put
	> localhost:3000/user
	> Send
	> Código de Sucesso: 200

updateImages
	> Put
	> localhost:3000/image
	> Send
	> Código de Sucesso: 200

----------------------------------------------------------------
Delete
----------------------------------------------------------------

deleteUser
	> Delete
	> localhost:3000/user
	> Send
	> Código de Sucesso: 200

deleteImages
	> Delete
	> localhost:3000/image
	> Send
	> Código de Sucesso: 200
