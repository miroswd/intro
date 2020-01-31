// Lidando com objetos e vetores
// Armazenar os dados da empresa Rocketseat 

const empresa = {
  nome:'Rocketseat',
  cor:'Roxo',
  foco:'Programação',
  endereco:{
    rua:'Rua Guilherme Gembala',
    numero:260,
  }
}

console.log(`A empresa ${empresa.nome} está localizada na ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

// Desenvolvedor

const dev = {
  nome: 'Miro',
  idade: 19,
  tecnologias: [ 
    {
      nome: 'JavaScript',
      especialidade: 'Web/mobile',
    },
    {
      nome:'Python',
      especialidade:'Data Science'
    },
    {
      nome:'C++',
      especialidade:'Desktop'
    }
  ]
}

console.log(`O dev ${dev.nome}, tem ${dev.idade} anos e usa ${dev.tecnologias[0].nome} com especialidade em ${dev.tecnologias[0].especialidade} `)


