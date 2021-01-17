const express = require("express")
const app = express()
var path = require('path')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const fs = require('fs')
var _ = require('lodash');
const Post = require('./models/db')
const ibmTTS = require('./models/ibm-TTS')

const port = process.env.PORT || 3000

// Config

// Template Engine

app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    }
}))
app.set('view engine', 'handlebars')


//Body parser
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

//Rotas

app.get('/:statusCode?', (req, res) => {
    Post.findAll({
      attributes: ['id','conteudo']
    }).then( posts => {
      if (req.params.statusCode == 401){
        return res.render('main', {posts: posts,
          msg: 'O campo de comentários não pode ficar vazio'})
      } else if (req.params.statusCode == 200){
        return res.render('main', {posts: posts,
                                  msg: 'Comentário adicionado com sucesso!'})
      }   
      return res.render('main', {posts: posts})
    })
})

app.post('/add', (req, res) => {
  if(Object.keys(req.body.comment).length > 1){
    Post.create({
      conteudo: req.body.comment
    }).then(() => {
      res.redirect('/200')
    }).catch( erro => {
      return res.send("Houve um erro: " + erro)
    })
  }else {
    return res.redirect('/401')
  }
})

app.get('/ouvir/:id', (req, res) =>{
  Post.findOne({
    attributes: ['conteudo'],
    where: {
      id: req.params.id
    }
  }).then( post => {
    
    const synthesizeParams = {
      text: post.conteudo,
      accept: 'audio/wav',
      voice: 'pt-BR_IsabelaV3Voice',
    }

    ibmTTS.tts(synthesizeParams)
    res.redirect('/')

  }).catch( erro => {
    res.send("Houve um erro: " + erro)
  })
})

app.listen(port, () => {
    console.log('Servidor rodando na url localhost:' + port)
  })
