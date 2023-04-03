const TEAM = [
  {
    name : "Wayne Barnett",
    role : "Founder & CEO",
    image : "wayne-barnett-founder-ceo.jpg",
  }
]

for (let member of TEAM){

  console.log('LOG di tutto l\'oggetto --->', member)
  console.log('-------------------------');

  for (let key in member){
    console.log("KEY più VALORE --->",key,":", member[key])
    console.log('-------------------------');
  }
}