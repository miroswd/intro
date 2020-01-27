// Cálculo aposentadoria

const nome = 'Silvana';
const sexo = 'F';
const idade = 59;
const contribuicao = 36;

// Tempo mínimo de contribuição para se aposentar 
// [homens:35, mulheres:30]
// Regra 95-85 -> soma da idade com contribuição

const apto = idade + contribuicao;

// console.log(apto)

if (sexo === 'F' && apto >= 85){
  console.log(`${nome}, a senhora está apta a se aposentar`)
} else if (sexo === 'M' && apto >= 95) {
  console.log(`${nome}, o senhor está apto a se aposentar`)
} else {
  console.log(`${nome}, você não pode se aposentar ainda`)
}