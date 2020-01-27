// Objetos possuem propriedades ou funcionalidades
// Coleção de propriedades

const aluno01 = {
  nome: 'Miro',
  nota: '9.8'
}

const aluno02 = {
  nome: 'Mayk',
  nota: '10',
}

const aluno03 = {
  nome:'Diego',
  nota: 10,
}

// Agrupamento (Vetores)

const alunos = [
  {
    nome:'Miro',
    nota:9.8,
  },
  {
    nome:aluno02.nome,
    nota:aluno02.nota
  }
]

// Console ->  é um objeto, q busca uma funcionalidade

const media = (alunos[0].nota + alunos[1].nota + aluno03.nota)
console.log(media)
console.log(alunos)