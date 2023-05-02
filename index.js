const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Bem vindo ao Formação NodeJs")
})

app.get("/blog", (req, res) => {
  res.send("Bem vindo ao meu Blog!")
})

app.get("/canal/youtube", (req, res) => {
  res.send("<h1>Olá! este é meu canal.</h1>")
})

app.listen(3333, (error) => {
  if(error) console.log("Ocorreu um erro.")
  else console.log("Servidor iniciado com sucesso!")
})