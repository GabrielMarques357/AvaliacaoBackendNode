import express from "express"
import router from "./routes/calculadora.js"

const app = express()
app.use(express.json())

// routes
app.use('/api', router)


const port = 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})