// Return all users and theirs technologies

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
    techs:["C#","C++", "Java", "Python"]
  }
]

for(i=0;i<users.length;i++){
  console.log(`${users[i].name} works with ${users[i].techs}`)
}

