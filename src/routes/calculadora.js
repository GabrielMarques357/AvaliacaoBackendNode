import express from 'express'
import ControllerCalculadora from '../controllers/calculadora.js'


const router = express.Router()


router.post('/soma', ControllerCalculadora.Soma)

router.post('/subtracao', ControllerCalculadora.Subtracao)

router.post('/multiplicacao', ControllerCalculadora.Multiplicacao)

router.post('/divisao', ControllerCalculadora.Divisao)

router.post('/potencia', ControllerCalculadora.Potencia)

router.post('/raiz', ControllerCalculadora.Raiz)

router.get('/avaliacao/:lista', ControllerCalculadora.ListaGet)

export default router
