Primeiramente executar o seguinte comando para instalar todos os módulos necessários:

npm install

Logo após, criar o arquivo .env na raíz do projeto users-service, e preenchê-lo com o conteúdo do arquivo .env.example alterando as variáveis para as da sua configuração, endereço do banco de dados, porta da aplicação. etc.

Para preencher a variação JWT, execute o seguinte comando:

node -e "console.log(require('crypto').randomBytes(512).toString('base64'))"

Então, pode executar o seguinte comando para criar as tabelas no seu banco de dados:

npx sequelize-cli db:migrate