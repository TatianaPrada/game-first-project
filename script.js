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
  constructor(){
    this.x = 0;
    this.y = 200;
    this.speedX = 0;
    this.speedY = 0;
    this.width = 80;
    this.height = 130;
  }
}

// const player1 = new Players()

// console.log(player1)

// //Drawing Players

// // const drawPlayer = ()=>{   
// //   ctx.drawImage(loadedImages.player1, player1.x, player1.y, player1.width, player1.height)
// // }

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
    requestAnimationFrame(updateCanvas)
    // drawPlayer()
    }
     
  
  
  updateCanvas()