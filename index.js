const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Bem vindo ao Formação NodeJs")
})

app.get("/blog/:article?", (req, res) => {
  const article = req.params.article
  if(article) res.send("<h1>Artigo: " + article + " </h1>")
  
  res.send("Bem vindo ao meu Blog!")
})

app.get("/canal/youtube", (req, res) => {
  res.send("<h1>Olá! este é meu canal.</h1>")
})

app.get("/ola/:nome/:empresa", (req, res) => {
  // REQ ==> Dados enviados pelo usuário
  // RES ==> Resposta que vai ser enviada para  usuário
  const nome = req.params.nome
  const empresa = req.params.empresa
  res.send(`<h1>Oii ${nome} da ${empresa}</h1>`)
})

app.listen(3333, (error) => {
  if(error) console.log("Ocorreu um erro.")
  else console.log("Servidor iniciado com sucesso!")
})