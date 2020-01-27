// Criar devs

const devs = [
  {
    nome:'Miro',
    tecnologias:['HTML','CSS','JavaScript']
  },
  {
    nome:'Mayk',
    tecnologias:['HTML','JavaScript','Node.Js']
  },
  {
    nome:'Diego',
    tecnologias:['HTML','CSS','JavaScript','Node.Js','React']
  }
]

for( i=0; i < devs.length; i++){
  console.log(`${devs[i].nome} trabalha com: ${devs[i].tecnologias} `)
  
  if (usaCSS(devs[i])){
    console.log(`O usuário: ${devs[i].nome} trabalha com css`)
  }
  console.log('----------------------------')
}



// Percorrendo o array de tecnologias
// console.log(devs[0].tecnologias.length)


function usaCSS(dev) {
  for (t = 0; t < dev.tecnologias.length; t++){
    if (dev.tecnologias[t] === 'CSS') {
      return true
    }
  } return false
}