// Const -> imutável
// Let   -> Permite alteração

const turmaA = [
  {
    nome:'Miro',
    nota:9.6
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
  },
  {
    nome:'Débora',
    nota:0,
  }
]



const mediaA = calculaMedia(turmaA)
enviaMsg(mediaA, 'Turma A')

const mediaB = calculaMedia(turmaB)
enviaMsg(mediaB, 'Turma B')

function calculaMedia(alunos){
  let soma = 0;
  for(let i = 0; i < alunos.length; i++){
    soma += alunos[i].nota
  }
  
  const media = soma/alunos.length
  
  return media.toFixed(1)
}


function enviaMsg(media, turma){
  console.log(`-------${turma}-------`)
  if (media > 5) {
    console.log(`Parabéns aos envolvidos, a média foi de ${media}`)
  } else {
    console.log('Só por deus')
  }
}

