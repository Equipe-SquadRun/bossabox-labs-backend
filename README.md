Primeiramente executar o seguinte comando para instalar todos os módulos necessários:

npm install

Logo após, criar o arquivo .env na raíz do projeto users-service, e preenchê-lo com o conteúdo do arquivo .env.example alterando as variáveis para as da sua configuração, endereço do banco de dados, porta da aplicação. etc.

As chaves private.key e public.key podem ser geradas em qualquer gerador de chaves

Pode ser usado com qualquer base de dados, eu criei uma base chamada runtrack no MySQL com o comando:

create database runtrack;

Então, pode executar o seguinte comando para criar as tabelas no seu banco de dados:

npx sequelize-cli db:migrate

E para iniciar o backend:

npm start

Após efetuar o login, copiar o token gerado que irá mostrar na resposta JSON e colocar no header chamado: x-access-token