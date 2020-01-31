// Calcular a média das turmas
// Funções e Métodos
const turmaA = [
  {
    nome:'Miro',
    nota:4.6
  },
  {
    nome:'Mayk',
    nota:10
  }
]

const turmaB = [
  {
    nome:'Raquel',
    nota:9.7,
  },
  {
    nome:'Estela',
    nota:9.7,
  }
]

function calculaMedia(alunos){
  return (alunos[0].nota + alunos[1].nota)/2
}

const mediaA = calculaMedia(turmaA)
enviaMsg(mediaA, 'Turma A')

const mediaB = calculaMedia(turmaB)
enviaMsg(mediaB, 'Turma B')



function enviaMsg(media, turma){
  console.log(`-------${turma}-------`)
  if (media > 5) {
    console.log(`Parabéns aos envolvidos, a média foi de ${media}`)
  } else {
    console.log('Só por deus')
  }
}


function marcarReprovado(aluno){
    aluno.reprovado = false;
    if (aluno.nota < 5) {
      aluno.reprovado = true
    }
  // console.table(alunos) // Exibe uma tabela
}


function msgReprovado(aluno){
  if(aluno.reprovado){
    console.log(`O aluno ${aluno.nome} está reprovado`);
  }
}


function alunoReprovado(alunos){
  for(let aluno of alunos) {
    // Para cada aluno no array alunos
    marcarReprovado(aluno)
    msgReprovado(aluno)
  }
}

alunoReprovado(turmaA);
alunoReprovado(turmaB);