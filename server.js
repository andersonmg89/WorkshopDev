const xicara = {
    cor: "branco",
    tamanho: 10,
    estaSujo(SimNao){
       console.log(SimNao)
    }
}

const cor = "preto"
const tamanho = 20

function sujo(esta){
    console.log(esta)
}

console.log(xicara.estaSujo("outro"))

const xicara2 = {
    cor,
    tamanho,
    sujo
}