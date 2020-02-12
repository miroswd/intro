// Return all users who use CSS

const users = [
  {
    name:"Miroswd",
    techs:["CSS", "HTML", "JavaScript", "VBSCript"],
  },
  {
    name:"Mayk",
    techs:["CSS", "HTML", "JavaScript"],
  },
  {
    name:"Diego",
    techs:["JavaScript", "Node.Js", "ReactJS", "React Native"]
  },
  {
    name:"Débora",
    techs:["HTML", "PHP", "Python", "Ruby"]
  },
  {
    name:"Bruna",
    techs:["C#", "C++", "Java", "Python"]
  }
]

for(i=0; i < users.length;i++){
  for(t=0;t < users[i].techs.length; t++){
    const user = users[i]
    const userCSS = checkCSS(user.techs[t])

    // console.log(`tech: ${users[i].techs[t]}, return: ${user}`)

    if(userCSS){
      console.log(`The user '${user.name}' works with CSS`)
    }
  }
}

function checkCSS(techsUser){
  // techsUser == users[i].techs[t] 
  if (techsUser == "CSS"){
    return true
  } return false
}
