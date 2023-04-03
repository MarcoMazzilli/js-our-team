
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

for (let object in TEAM){

  const member = TEAM[object]

  const card        =  generateCard()
  const photo       =  generatePhoto(card)
  const description =  generateDescription(card)

  //inserisco dinamicamente le immagini
  photo.innerHTML = ` <img src="assets/img/${member.image}" alt="">`
  
  //Inserisco dinamicamente il nome 
  description.innerHTML += `<h3>${member.name}</h3>`;

  //inserisco dinamicamente il ruolo 
  description.innerHTML += `<p>${member.role}</p>`



  

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

function generatePhoto(card){

  const photo = document.createElement("div")
  photo.classList.add("photo")
  card.appendChild(photo);
  
  return photo
}


function generateDescription(card){

  const description = document.createElement("div")
  description.classList.add("description")
  card.appendChild(description)

  return description

}