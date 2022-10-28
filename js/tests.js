const chai = window.chai
const expect = chai.expect

describe('Las variables en Javascript', () => {
  it('pueden contener strings', () => {
    // Añade la línea que falta
    const a = "Javascript"
    expect(a).to.equal("Javascript");
  })
  it('pueden contener números', () => {
    // Añade la línea que falta

    expect(b).to.equal(14.64);
  })
  it('pueden contener booleanos', () => {
    // Añade la línea que falta

    expect(c).to.equal(false);
  })
})

describe('Comparaciones en Javascript', () => {
    it("usando ===", () => {
        const number = 20;
        //completa la asignación usando number y el comparador ===

        expect(expresion).to.equal(false)
    })

    it("usando !==", () => {
        const language = "Javascript";
        //completa la asignación usando language y el comparador !==

        expect(expresion).to.equal(false)
    })
})

describe("Operaciones aritméticas", () => {
    it("Usando suma", () => {
        const a = 10;

        expect(a+b).to.equal(100);
    })
    it("Usando multiplicación", () => {
        const a = 10;

        expect(a*b).to.equal(13);
    })
    it("Usando división", () => {
        const a = 10;

        expect(a/b).to.equal(2.5);
    })
})

describe('Algebra booleana', () => {
    it("Usando el operador AND (&&)", () => {
        const a = true;
        //completa la asignación de b

        const expression = a && b;
        expect(expression).to.equal(true);
    })
    it("Usando el operador OR (||)", () => {
        const a = false;
        //completa la asignación de b

        const expression = a || b;
        expect(expression).to.equal(false);
    })
})


// Para hacer pasar estos tests, edita el código correspondiente
// en el archivo "code.js"
describe("Ejemplos de funciones", () => {
    it("Función que nos dice si un número es par (even) o impar (odd)", () => {
        expect(evenOrOdd(2)).to.equal("even")
        expect(evenOrOdd(13)).to.equal("odd")
    })

    it ("Función que nos devuelve un saludo para cada nombre", () => {
        expect(greeting("Javi")).to.equal("Hola, Javi!")
        expect(greeting("gente")).to.equal("Hola, gente!")
        expect(greeting("Mary")).to.equal("Hola, Mary!")
    })
})

