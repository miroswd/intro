// Retirement

// Tempo mínimo de contribuição, para homens 35 anos, mulheres 30 anos
// Tempo de contribuição + idade deve ser igual a 95 anos, para homens e 85 para mulheres
// Exibir uma mensagem se a pessoa pode se aposentar ou não

const name = "Silvana";
const genre = "F";
const age = 48;
const contribution = 23;
const retire = contribution + age

if (genre == 'F'){
    if(retire >= 85){
        console.log(`${name}, you can retire`)
    } else {
        console.log(`${name}, you cannot retire`)
        console.log(`You must work another ${85 - retire} years`)
    }
} else if (genre == 'M'){
    if(retire >= 95){
        console.log(`${name}, you can retire`)
    } else {
        console.log(`${name}, you cannot retire`)
        console.log(`You must work another ${95 - retire} years`)
    }
}
