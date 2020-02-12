// Income and expenses

const users = [
  {
    name:"Silvio",
    income:[115.3, 48.7, 98.3, 14.5],
    expense:[85.3, 13.5, 19.9],
  },
  {
    name:"Katherine",
    income:[24.6, 214.3, 45.3],
    expense:[185.3, 12.1, 120.0],
  },
  {
    name:"Lucia",
    income:[9.8, 120.3, 340.2, 45.3],
    expense:[450.2, 29.9],
  }
]

// Go through users
for(i=0; i < users.length; i++){
  balanceCalculate(users[i].income, users[i].expense);
}

// Calculate the balance

function balanceCalculate(income, expense){
  const numbers = [income, expense];

  const num = sumNumbers(numbers);
  const balance = num[0] - num[1];
  
  // Return
  let situation = "NEGATIVE";
 
  if (balance >= 0){
    situation = "POSITIVE";
  } 

  console.log(`The user '${users[i].name}' has a ${situation} balance of R$ ${balance.toFixed(2)}`);
 
}

// Sum income and expenses
function sumNumbers(number){
  let income = 0;
  let expense = 0;

  for(inc=0; inc < number[0].length; inc++){
    income += number[0][inc]
  }
  // console.log(income)

  for(exp=0; exp < number[1].length; exp++){
    expense += number[1][exp]
  }
  // console.log(expense)

  return [income,expense];
}


/**                     RESULT                     /**

The user 'Silvio' has a POSITIVE balance of R$ 158.10
The user 'Katherine' has a NEGATIVE balance of R$ -33.20
The user 'Lucia' has a POSITIVE balance of R$ 35.50
*/