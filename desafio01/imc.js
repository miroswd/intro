// Calculate IMC

const name = "João Kleber";
const weight = 803.6;
const height = 1.80;

const imc = weight/(height * height);

if (imc >= 30) {
    console.log(`${name}, are you overweight`);
} else {
    console.log(`${name}, you're not overweight`);
}