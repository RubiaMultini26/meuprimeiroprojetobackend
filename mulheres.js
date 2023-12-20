const express = require ("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Ana Rubia Multini',
        imagem: 'https://drive.google.com/file/d/1ihNe2ZH46m0IoVRrmZUzc8YVgxPXi9tO/view?usp=drive_link',
        minibio: 'Analista de Teste e Qualidade de Software QA'
    },
    {
        nome: 'Renata Kinkel Fiorotto',
        imagem: 'https://drive.google.com/file/d/1ihNe2ZH46m0IoVRrmZUzc8YVgxPXi9tO/view?usp=drive_link',
        minibio: 'Analista de Mídias e Tráfego'
    },
    
    {
        nome: 'Pequenina',
        imagem: 'https://drive.google.com/file/d/1ihNe2ZH46m0IoVRrmZUzc8YVgxPXi9tO/view?usp=drive_link',
        minibio: 'Gata Rainha da Casa'
    }
]

function mostraMulheres(request, response){
 response.json(mulheres)
}

function mostraPorta() {
    console.log("servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)