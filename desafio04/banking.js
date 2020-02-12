// Banking Operation

/*
  credit == balance + credit 
  debit  == balance - debit

*/

const user = {
  name:"Mariana",
  transactions:[],
  balance:0,
}


createTransaction({type:'credit',value:50.5}),
createTransaction({type:'credit',value:510.5})

function createTransaction(transaction){
  user.transactions.push(transaction)

  if(transaction.type == 'credit'){
    user.balance += transaction.value
  } else {
    user.balance -= transaction.value
  }
}

console.log(user)


// Report

getHigherTransactionByType('credit')

function getHigherTransactionByType(type){
  let highest = 0;

  for(i=0;i < user.transactions.length; i++){
    if(user.transactions[i].value > highest && user.transactions[i].type == type){
      highest = user.transactions[i].value
    }
    if(i+1 == user.transactions.length ){
      console.log(user.transactions[i])
    }
  }
}

// 