import ServiceCalculadora from '../services/calculadora.js'

class ControllerCalculadora {

    Soma(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2

            //chama o service
            const result = ServiceCalculadora.Soma(num1, num2)
            

            res.status(200).send({ data: { num1, num2, result} })
            
        } catch (error) {
            res.status(400).send({ msg: error.massage })
        }
    }

    Subtracao(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2

            const result = ServiceCalculadora.Subtracao(num1, num2)

            res.status(200).send({ data: { num1, num2, result}})

        } catch (error) {
            res.status(400).send({ msg: error.massage })
        }
    }
    
    Multiplicacao(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2

            const result = ServiceCalculadora.Multiplicacao(num1, num2)

            res.status(200).send({ data: { num1, num2, result}})

        } catch (error) {
            res.status(400).send({ msg: error.massage })
        }
    }

    Divisao(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2

            const result = ServiceCalculadora.Divisao(num1, num2)
            res.status(200).send({ data: { num1, num2, result}})

        } catch (error) {
            res.status(400).send({ msg: error.massage })
        }
    }

    Potencia(req, res) {
        try {
            const base = req.body.base
            const expoente = req.body.expoente

            const result = ServiceCalculadora.Potencia(base, expoente)
            res.status(200).send({ data: { num1, num2, result}})

        } catch (error) {
            res.status(400).send({ msg: error.massage })
        }
    }

    Raiz(req, res) {
        try {
            const num1 = req.body.num1

            const result = ServiceCalculadora
            res.status(200).send({ data: { num1, result}})
        } catch (error) {
            res.status(400).send({ msg: error.massage })
        }
    }

    ListaGet(req,res) {

        const result = "1- Soma | 2- Subtracao | 3- Multiplicacao | 4- Divisao | 5- Potencia | 6- Raiz"
        res.status(200).send(result)
    }
}

export default new ControllerCalculadora()