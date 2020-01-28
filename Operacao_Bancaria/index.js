// Realizar operações bancarias

const user = {
  name:'Mariana',
  transactions:[
    {
      type:'credit',
      value:50.5,
    },
    {
      type:'debit',
      value:50.5,
    }
  ],
  balance:0,
}

const typeTransaction = user.transactions

createTransaction({type:'credit', value:19.5});
createTransaction({type:'debit', value:10.52});
createTransaction({type:'debit', value:140.23});
createTransaction({type:'credit', value:2.5}); // Cria transação

console.log(`Your real balance is R$ ${user.balance.toFixed(2)}`)

getHigherTransactionByType('credit'); // Busca a maior transação feita no crédito
getHigherTransactionByType('debit'); // Busca a maior transação feita no débito

getAverage(); // Calcula a média




function createTransaction(transaction){
  if (transaction.type == 'credit'){
    user.balance += transaction.value
  } else if (transaction.type == 'debit'){
    user.balance -= transaction.value
  }
  user.transactions.push(transaction)
}


function getHigherTransactionByType(type){
  let highestValue = 0
  
  for (i =0; i < typeTransaction.length; i++){
    // Verifica o tipo da transação e se for maior que o valor da variável
    // substitui o valor
    if (typeTransaction[i].type == type && typeTransaction[i].value > highestValue) {
      highestValue = typeTransaction[i].value
    }
   }
  console.log(`The highest transaction made on ${type} was R$ ${highestValue.toFixed(2)}`)
}


function getAverage() {
  let soma = 0;
  for (i =0; i < typeTransaction.length; i++){
    soma += typeTransaction[i].value
  }
  const media = soma/typeTransaction.length
  console.log(`The average between transactions R$ ${media.toFixed(2)}`)
}
