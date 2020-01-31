// Calcular a soma de receitas e despesas e retornar o saldo

const usuarios = [
  {
    nome: 'Salvio',
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: 'Marcio',
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: 'Lucia',
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [40.2, 29.9]
  }
]

for (i = 0;i < usuarios.length; i++){
  calculaSaldo(usuarios[i].receitas, usuarios[i].despesas)
}

function calculaSaldo(receitas, despesas){
  let somaReceita = 0;
  for (i=0; i < receitas.length; i++){
    somaReceita += receitas[i]
  }

  let somaDespesa = 0;
  for (i=0; i < despesas.length; i++){
    somaDespesa += despesas[i]
    let numeros = [somaReceita, somaDespesa]
    console.log(somaNumeros(numeros))
  }
    
}

function somaNumeros(numeros){
    let saldo = (numeros[0] - numeros[1]).toFixed(2)
    return saldo
}
