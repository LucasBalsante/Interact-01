//importando as bibliotecas
const express = require('express');
const pages = require('./pages')

const app = express();
//direcionamento dos arquivos estaticos
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

//rotas para o node
app.post('/login', pages.login)
app.post('/send', pages.send)
app.post('/automessage', pages.automessage)
app.post('/lista', pages.lista)


app.get('/', function (req, res){
    res.redirect('index.html')
})

app.get('/initial', function (req, res){
    res.redirect('initial.html')
})

app.get('/notas', function (req, res){
    res.redirect('notas.html')
})


app.listen(8080)
console.log('server running port 8080')