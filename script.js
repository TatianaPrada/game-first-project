const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// canvas.style.visibility = "hidden"

//Elements of HTML

const startButton = document.getElementById("start-button")
const leftDiv = document.getElementById("left-side")
const centralDiv = document.getElementById("game-intro")
const gameBoard = document.getElementById("game-board")
const mainDiv = document.getElementById("main_div")
const gameOverModal = document.getElementById("gameOverModal")
const playAgainButton = document.getElementById("re-start-button")

//modal.style.display = "block";

//timer
const timer = document.getElementById('stopwatch')

let min = 01
let sec = 30
let stoptime = true

function realTime() {
  return (min * 60) + sec
}

function startTimer() {
  if (stoptime == true) {
        stoptime = false
        timerCycle()
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true
  }
}

function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec)
    min = parseInt(min)

    sec = sec - 1

    if (sec == 0 && min == 0) {
      stopTimer()
    }
    if (sec == 0 && min == 1) {
      min = 0
      sec = 59
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec
    }
    if (min < 10 || min == 0) {
      min = '0' + min
    }
     timer.innerHTML = min + ':' + sec

    setTimeout("timerCycle()", 1000)
  }
}

function resetTimer() {
  timer.innerHTML = '01:30'
}


//Start button
// startButton.addEventListener("click", function(){
//   setInterval(function(){
//     drawDoll1()
//   }, 2000)
// })



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
    this.x = 0
    this.y = ownY
    this.speedX = 0
    this.speedY = 0
    this.width = 110
    this.height = 170
    this.inMovement = false
  }
}


//Creating Players

let arrayOfPlayers = []

let ySum = 175
const player1 = new Players(ySum)
arrayOfPlayers.push(player1)
ySum += 97
const player2 = new Players(ySum)
arrayOfPlayers.push(player2)
ySum += 97
const player3 = new Players(ySum)
arrayOfPlayers.push(player3)
ySum += 97
const player4 = new Players(ySum)
arrayOfPlayers.push(player4)
ySum += 97
const player5 = new Players(ySum)
arrayOfPlayers.push(player5)
ySum += 97
const player6 = new Players(ySum)
arrayOfPlayers.push(player6)
ySum += 96
const player7 = new Players(ySum)
arrayOfPlayers.push(player7)
ySum += 96
const player8 = new Players(ySum)
arrayOfPlayers.push(player8)

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

//Audio function

let dollSoundLevel1 = new Audio('/sounds/doll-sound-8sec.mpeg')
    dollSoundLevel1.preload = 'auto'

    



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

//Update the Players' images
const updatePlayers = ()=>{    
  for(let j = 0; j < arrayOfPlayers.length; j++){
  arrayOfPlayers[j].x += arrayOfPlayers[j].speedX 
  checkBounds()
}}


const clearCanvas = ()=>{        
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

//Create the doll images

const doll1 = new Image()
doll1.src = "/images/evil_doll_1.png"

const drawDoll1 = ()=>{
  ctx.drawImage(doll1, 1224, 0, 276, 276)
}

const doll2 = new Image()
doll2.src = "/images/evil_doll_2.png"

const drawDoll2 = ()=>{
  ctx.drawImage(doll2, 1224, 0, 276, 276)
}


//Functions


function checkMovementPlayer() {
  for(let i = 0; i < arrayOfPlayers.length; i++){
    if(arrayOfPlayers[i].speedX !== 0){
      return true
    } 
  }
  return false
}

let showDoll1 = true;
let roundCounter = 0
 function gameLogic1(){
   setInterval(function () {
    showDoll1 = !showDoll1
    roundCounter++
   },4000)
   
 
   }

function gameOver(){
    if((roundCounter >= 1) && (roundCounter % 2 !== 0) && checkMovementPlayer()) {
     dollSoundLevel1.pause()
     gameOverModal.style.display = "block";
     }
}

const startGame = () => {
  leftDiv.style.display = "none"
  centralDiv.style.display = "none"
  gameBoard.style.display = "block"
  mainDiv.style.justifyContent = "flex-end"

  dollSoundLevel1.play()
  dollSoundLevel1.loop = true

  startTimer()
  gameLogic1()
  updateCanvas()
}



const updateCanvas = ()=>{
  if(imageLinks.length === counterForLoadedImages){
    clearCanvas()  
    updatePlayers()
    checkMovementPlayer()
    gameOver()

    if(showDoll1){
      drawDoll1();
      
    }else{
      drawDoll2();

    }

    drawPlayers()
    console.log(roundCounter)
  }
requestAnimationFrame(updateCanvas) //Activa un loop infinito. Este loop va a l
}

console.log(checkMovementPlayer())


// updateCanvas()


window.addEventListener('load', (event) => { //event listeners, algun código que quieras que se ejecute   despues de la carga
  startButton.addEventListener('click', startGame )

  

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

  //Keydown event // START GAME
  document.addEventListener('keydown', (event)=>{
    for(let i = 0; i < arrayOfPlayers.length; i++){
      if(event.which === 32){
        arrayOfPlayers[i].speedX = Math.random() * (1.5 - 0.5 +1) + 0.5
      }
    }
  })

  
});





 //setInterval contador
 //cuando ese contador llegue a lo que tu quieres
 //se pinta una muñeca u otra


//Doll Sound

// let dollSoundLevel1 = ""
// window.addEventListener('load', ()=>{
//   dollSoundLevel1 = new Audio('/sounds/sound-8seconds.mp3')
//   dollSoundLevel1.preload = 'auto'
// })


//Intro sound


  // introSound = new Audio('./sounds/intro-sound.mp3')

// function introPlay() {
//   introSound.autoplay()
// }

// introPlay()

