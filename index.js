const express = require("express")
const app = express()

app.listen(3333, (error) => {
  if(error) console.log("Ocorreu um erro.")
  else console.log("Servidor iniciado com sucesso!")
})