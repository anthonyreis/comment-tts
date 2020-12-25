# INFORMAÇÕES IMPORTANTES

Primeiramente é necessário ter o nodeJS e o MySQL.

Baixe todo o projeto inclusive o package.json para que o npm baixe as dependências.

É necessário criar um banco de dados com o nome 'postapp', já a tabela será criada automaticamente pelo programa ao executar.

Antes de iniciar, executar o 'npm i' para que sejam baixadas as dependências.

Por padrão o programa está configurado na porta '8081', podendo acessá-lo por 'localhost:8081'.

Caso deseje mudar de porta, deve-se alterar a linha 100 do arquivo app.js, e também as linhas 12 e 18 do arquivo data.js.

O arquivo db.js é responsável pela conexão com o banco de dados, caso seu banco possua senha adicioná-la no campo em branco da linha 5.

Temporariamente a apikey da ibm ainda está no código pra facilitar a execução, mas posteriormente irei removê-la.
