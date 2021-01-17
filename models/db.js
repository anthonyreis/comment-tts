const Sequelize = require('sequelize')

//Conexão com o banco de dados MySql

const sequelize = new Sequelize('postApp', 'root', '123456', {
  host: "localhost",
  dialect: 'mysql'
})

const Post = sequelize.define('posts', {
  conteudo: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notNull: { msg: "O campo de comentário não pode estar vazio!" },
    }
  }
})

module.exports = Post

Post.sync()
