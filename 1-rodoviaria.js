console.log(`\n Testes para uma bilheteria de agência de viagens`)
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 19;
const estaAcompanhada = true;
let temPassagemcomprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true);

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem!!!")
}else{
    console.log(" Desculpe tivemos um erro!");
}

for (let i = 0 ;i < 3; i ++) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
}
