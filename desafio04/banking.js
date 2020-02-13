// Banking Operation

const user = {
  name:"Mariana",
  transactions:[],
  balance:0,
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

// Report

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }



function createTransaction(transaction){
  user.transactions.push(transaction)

  if(transaction.type == 'credit'){
    user.balance += transaction.value
  } else {
    user.balance -= transaction.value
  }
}


//             ** REPORT **              //

// Higher
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

// Average
function getAverageTransactionValue(){
  let sum = 0;
  const transactions  = user.transactions.length
  for(i = 0; i < transactions; i++){
    sum += user.transactions[i].value
  }

  const media = sum/transactions

  console.log(`The average value is R$ ${media}`)
}

// Number of transactions 
function getTransactionsCount(){
  let credit = 0;
  let debit = 0;

  for(i = 0; i < user.transactions.length; i++){
    if(user.transactions[i].type == "credit"){
      credit++
    } else {
      debit++
    }
  }
  console.log({'credit':credit,'debit':debit})
}