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
    despesas: [450.2, 29.9]
  }
]


// Precisa transformar isso numa function


for (i = 0; i < usuarios.length; i++){
  // Calculando a receita
  let receita = 0;
  for (r = 0; r < usuarios[i].receitas.length; r++){
    receita += usuarios[i].receitas[r]
  }
  
  let despesa = 0;
  // Calculando a despesa
  for (d = 0; d < usuarios[i].despesas.length; d++){
    despesa += usuarios[i].despesas[d]
  }

  saldo(receita,despesa,usuarios[i])
  console.log("=======================================")
}

function saldo(receita,despesa, usuario){
  const saldo = receita - despesa
  console.log(`Saldo atual de ${usuario.nome}: R$ ${saldo.toFixed(2)}`)
}

