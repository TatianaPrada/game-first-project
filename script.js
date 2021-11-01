const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// canvas.style.visibility = "hidden"

//Start button

let startButton = document.getElementById("start-button")
let leftDiv = document.getElementById("left-side")
let centralDiv = document.getElementById("game-intro")
let gameBoard = document.getElementById("game-board")
let mainDiv = document.getElementById("main_div")


// function remove(elem) {
//   elem.parentNode.removeChild(elem);
// }

startButton.onclick = ()=>{
leftDiv.style.display = "none"
centralDiv.style.display = "none"
gameBoard.style.display = "block"
mainDiv.style.justifyContent = "flex-end"
}


//IMAGENES

const loadedImages = {}

const imageLinks = [
  {link: "./images/players/player_1.png", name: 'player1'},
  {link: "./images/players/player_2.png", name: 'player2'},
  {link: "./images/players/player_3.png", name: 'player3'},
  {link: "./images/players/player_4.png", name: 'player4'},
  {link: "./images/players/player_5.png", name: 'player5'},
  {link: "./images/players/player_6.png", name: 'player6'},
  {link: "./images/players/player_7.png", name: 'player7'},
  {link: "./images/players/player_8.png", name: 'player8'}
]

let counterForLoadedImages = 0; 

imageLinks.forEach((imagen)=>{ 
  const img = new Image() 
  img.src = imagen.link 
  img.onload = ()=>{ 
    counterForLoadedImages++
    loadedImages[imagen.name] = img
    if(imageLinks.length === counterForLoadedImages){ 
    }
  }
})

//Players Class

class Players {
  constructor(ownY){
    this.x = 0;
    this.y = ownY;
    this.speedX = 0;
    this.speedY = 0;
    this.width = 110;
    this.height = 170;
  }
}
console.log(loadedImages)

//Creating Players

let arrayOfPlayers = []

let ySum = 180
const player1 = new Players(ySum)
arrayOfPlayers.push(player1)
ySum += 100
const player2 = new Players(ySum)
arrayOfPlayers.push(player2)
ySum += 100
const player3 = new Players(ySum)
arrayOfPlayers.push(player3)
ySum += 100
const player4 = new Players(ySum)
arrayOfPlayers.push(player4)
ySum += 100
const player5 = new Players(ySum)
arrayOfPlayers.push(player5)
ySum += 100
const player6 = new Players(ySum)
arrayOfPlayers.push(player6)
ySum += 100
const player7 = new Players(ySum)
arrayOfPlayers.push(player7)
ySum += 100
const player8 = new Players(ySum)
arrayOfPlayers.push(player8)

// console.log(arrayOfPlayers[1])


//Drawing Players

const drawPlayers = ()=>{
  ctx.drawImage(loadedImages.player1, player1.x, player1.y, player1.width, player1.height)
  ctx.drawImage(loadedImages.player2, player2.x, player2.y, player2.width, player2.height)
  ctx.drawImage(loadedImages.player3, player3.x, player3.y, player3.width, player3.height)
  ctx.drawImage(loadedImages.player4, player4.x, player4.y, player4.width, player4.height)
  ctx.drawImage(loadedImages.player5, player5.x, player5.y, player5.width, player5.height)
  ctx.drawImage(loadedImages.player6, player6.x, player6.y, player6.width, player6.height)
  ctx.drawImage(loadedImages.player7, player7.x, player7.y, player7.width, player7.height)
  ctx.drawImage(loadedImages.player8, player8.x, player8.y, player8.width, player8.height)  
}


//Keydown event 

document.addEventListener('keydown', (event)=>{
  for(let i = 0; i < arrayOfPlayers.length; i++){
    if(event.which === 32){
      arrayOfPlayers[i].speedX = Math.random() * (1 - 0.1 +1) + 0.1
    }
  }
})

//Keyup Event

document.addEventListener('keyup', (event)=> {
  if(event.which === 49){
    arrayOfPlayers[0].speedX = 0
  }
  if(event.which === 50){
    arrayOfPlayers[1].speedX = 0
  }
  if(event.which === 51){
    arrayOfPlayers[2].speedX = 0
  }
  if(event.which === 52){
    arrayOfPlayers[3].speedX = 0
  }
  if(event.which === 53){
    arrayOfPlayers[4].speedX = 0
  }
  if(event.which === 54){
    arrayOfPlayers[5].speedX = 0
  }
  if(event.which === 55){
    arrayOfPlayers[6].speedX = 0
  }
  if(event.which === 56){
    arrayOfPlayers[7].speedX = 0
  }
  if(event.which === 57){
    arrayOfPlayers[8].speedX = 0
  }
})
//Check Boundaries Function

const checkBounds = ()=>{ 
  for (let i = 0; i < arrayOfPlayers.length; i++) {
    const player = arrayOfPlayers[i]

    if(player.x > 1300){
      player.x = 1300
    }
  
    if(player.x < 0){
      player.x = 0
    }   
  }
 
}

//Update the Player images
const updatePlayers = ()=>{    
  for(let j = 0; j < arrayOfPlayers.length; j++){
  arrayOfPlayers[j].x += arrayOfPlayers[j].speedX 
  checkBounds()
}
}


const clearCanvas = ()=>{        
  ctx.clearRect(0, 0, 1500, 1500)
}


// //Doll Class

// class Doll {
//   constructor(){
//     this.x = 200;
//     this.y = 0;
//     this.speedX = 0;
//     this.speedY = 0;
//     this.width = 80;
//     this.height = 130;
//   }
// }



window.addEventListener("load",() => {
}) 

const updateCanvas = ()=>{
  if(imageLinks.length === counterForLoadedImages){
    clearCanvas()
    drawPlayers()
    updatePlayers()
  }
  requestAnimationFrame(updateCanvas) //Activa un loop infinito. Este loop va a la velocidad de la tasa de refresco de la pantalla en la que se está viendo el juego. Le vamos a pasar como argumento la función donde estamos llamando al requestAnimationFrame (en este caso, updateCanvas)
}

updateCanvas()