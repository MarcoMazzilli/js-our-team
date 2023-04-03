
const containerCard = document.querySelector(".container-card")
console.log(containerCard)

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



// ======= Actions =========

for (let member of TEAM){
  const card = generateCard()
  generateContent(card)
  

  console.log('-------------------------');
  console.log('LOG di tutto l\'oggetto --->', member)


  for (let key in member){
    console.log("KEY più VALORE --->",key,":", member[key])
  }
  
}







// ======= FUNZIONI ========= 

function generateCard(){

  const card = document.createElement("div")
  card.classList.add("card")
  containerCard.appendChild(card)

  return card
}

function generateContent(card){

  const photo = document.createElement("div")
  photo.classList.add("photo")
  card.appendChild(photo);

  const description = document.createElement("div")
  description.classList.add("description")
  card.appendChild(description)
}



// const photo = document.crateElemeent("div")
// photo.classList.add("photo")
// card.appendChild(photo)

// const description = document.crateElemeent("div")
// description.classList.add("description")