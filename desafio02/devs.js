const devs = [
  {
    name:"Miroswd",
    age:19,
    techs:[
      {
        name:"JavaScript",
        specialty:"Web/Mobile"
      },
      {
        name:"VBScript",
        specialty:"Task Automation"
      },
    ],
  },
  {
    name:"Mayk",
    age:26,
    techs:[
      {
        name:"C++",
        specialty:"Desktop",
      },
      {
        name:"JavaScript",
        specialty:"Web/Mobile",
      },
      {
        name:"Python",
        specialty:"Data Science",
      },
    ],
  },
]

const i = 1;

console.log(`The user ${devs[i].name}, is ${devs[i].age} years old and uses the ${devs[i].techs[0].name} technology with specialization in ${devs[i].techs[0].specialty}`)