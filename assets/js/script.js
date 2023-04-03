const TEAM = [
  {
    name : "Wayne Barnett",
    role : "Founder & CEO",
    image : "wayne-barnett-founder-ceo.jpg",
  },
  {
    name : "Angela Carrol",
    role : "Chief Editor",
    image : "angela-caroll-chief-editor.jpg",
  },
  {
    name : "Walter Gordon",
    role : "Office Manager",
    image : "walter-gordon-office-manager.jpg",
  },
  {
    name : "Angela Lopez",
    role : "Social Media Manager",
    image : "angela-lopez-social-media-manager.jpg",
  },
  {
    name : "Scott Estrada",
    role : "Developer",
    image : "scott-estrada-developer.jpg",
  },
  {
    name : "Barbara Ramos",
    role : "Graphic Designer",
    image : "barbara-ramos-graphic-designer.jpg",
  },
]

for (let member of TEAM){

  console.log('-------------------------');
  console.log('LOG di tutto l\'oggetto --->', member)

  for (let key in member){
    console.log("KEY più VALORE --->",key,":", member[key])
  }
}


function generateCard(){
  
}