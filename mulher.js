const express = require ("express")
const route = express.Router()

const app = express()
const porta = 3333

function mostraMulher(resquest, response) {
response.json({
    nome: 'Ana Rubia Multini',
    imagem: 'https://drive.google.com/file/d/1ihNe2ZH46m0IoVRrmZUzc8YVgxPXi9tO/view?usp=drive_link',
    minibio: 'Analista de Teste e Qualidade de Software QA'
})
}

function mostraPorta() {
    console.log("servidor criado e rodando na porta", porta)
}

app.use(route.get('/mulher', mostraMulher ))
app.listen(porta, mostraPorta)