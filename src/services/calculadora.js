class ServiceCalculadora {

    Soma(num1, num2) {

        if(isNaN(num1, num2)){
            throw new Error("Favor informar somente números!")
        }

        const numero1 = num1 
        const numero2 = num2
        return numero1 + numero2
    }

    Subtracao(num1, num2) {

        if(isNaN(num1, num2)){
            throw new Error("Favor informar somente números!")
        }

        return num1 - num2
    }

    Multiplicacao(num1, num2) {

        if(isNaN(num1, num2)){
            throw new Error("Favor informar somente números!")
        }

        return num1 * num2
    }
    
    Divisao(num1, num2) {

        if(isNaN(num1, num2)){
            throw new Error("Favor informar somente números!")
        }

        return num1 / num2
    }

    Potencia(base, expoente) {

        if(isNaN(base, expoente)){
            throw new Error("Favor informar somente números!")
        }

        return "não consegui realizar o calculo"
    }

    Raiz(num1) {

        if(isNaN(num1, num2)){
            throw new Error("Favor informar somente números!")
        }

        return "não consegui realizar o calculo"
    }
}

    

    
export default new ServiceCalculadora()