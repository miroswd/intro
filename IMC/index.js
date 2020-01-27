// Cálculo de IMC

const nome = 'Miro';
const peso = 60;
const altura = 1.74;

const imc = (peso / (altura* altura)).toFixed(2); // toFixed(num) -> Formatação do float

if (imc >= 30) {
  console.log(`${nome}, vocề está acima do peso`)
} else {
  console.log(`${nome}, você não está acima do peso `)
}

