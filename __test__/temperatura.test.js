import { describe, it, expect} from '@jest/globals'
import ServiceCalculadora from "../src/services/calculadora.js"

describe("Testando Soma", () => {

    it("Testando dois zero", () => {
        const result = ServiceCalculadora.Soma(0, 0)
        
        expect(result).toBe(0)
    })

    it("Testando um número com zero", () => {
        const result = ServiceCalculadora.Soma(1, 0)

        expect(result).toBe(1)
    })

    it('Somando dois números com casa decimal', () => {
        const result = ServiceExercicio.Somar(1.2, 2.2)

        expect(result).toBe(3.4)
    })

})

describe("Testando Subtracao", () => {

    it("Testando dois zero", () => {
        const result = ServiceCalculadora.Subtracao(0, 0)
        
        expect(result).toBe(0)
    })

    it('Subtraindo dois números com casa decimal', () => {
        const result = ServiceExercicio.Subtracao(2.5, 2.4)

        expect(result).toBe(0.1)
    })
})

describe("Testando Multiplicacao", () => {

    it('Multiplicando dois números com casa decimal', () => {
        const result = ServiceExercicio.Multiplicacao(2.5, 2.5)

        expect(result).toBe(5)
    })
})

describe("Testando Divisao", () => {

    it("Testando dois zero", () => {
        const result = ServiceCalculadora.Divisao(0, 0)
        
        expect(result).toBe(0)
    })

    it('Dividido numero grande', () => {
        const result = ServiceExercicio.Divisao(100, 2)

        expect(result).toBe(50)
    })
})

describe("Testando Potencia", () => {

    it("Testando dois zero", () => {
        const result = ServiceCalculadora.Potencia(0, 0)
        
        expect(result).toBe(0)
    })

})

describe("Testando Raiz", () => {

    it("Testando dois zero", () => {
        const result = ServiceCalculadora.Raiz(0, 0)
        
        expect(result).toBe(0)
    })
})

