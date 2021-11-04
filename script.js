const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//ELEMENTS OF HTML

const startButton = document.getElementById("start-button");
const leftDiv = document.getElementById("left-side");
const centralDiv = document.getElementById("game-intro");
const gameBoard = document.getElementById("game-board");
const mainDiv = document.getElementById("main_div");
const gameOverModal = document.getElementById("gameOverModal");
const playAgainButton = document.getElementById("re-start-button");
const levelUpModal = document.getElementById("level2-modal");
const playLevel2Button = document.getElementById("continue");
const deadMessage = document.getElementById("dead-players-message");

//PLAYERS FUNCTIONS

let playerWin = false;

const checkBounds = () => {
  for (let i = 0; i < arrayOfPlayers.length; i++) {
    const player = arrayOfPlayers[i];
    if (player.x > 1300) {
      player.x = 1300;
      playerWin = true;
      if (player.x < 0) {
        player.x = 0;
      }
    }
  }
};

const updatePlayers = () => {
  for (let j = 0; j < arrayOfPlayers.length; j++) {
    arrayOfPlayers[j].x += arrayOfPlayers[j].speedX;
    checkBounds();
  }
};

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

function checkAllPlayersFinish() {
  for (let i = 0; i < arrayOfPlayers.length; i++) {
    if (arrayOfPlayers[i].x !== 1300) {
      return false;
    }
  }
  return true;
}

let deadPlayers = [];

function checkDeadPlayers() {
  for (let i = 0; i < arrayOfPlayers.length; i++) {
    if (arrayOfPlayers[i].x !== 1300) {
      deadPlayers.push(arrayOfPlayers[i].name);
    }
  }
}

// DOLL FUNCTIONS

let showDoll1 = true;
let intervalTest = "";

function dollAnimation() {
  intervalTest = setInterval(function () {
    showDoll1 = !showDoll1;
  }, 4050);
}

// GAME LOGIC FUNCTIONS

const writeDeadMessage = () => {
  if (deadPlayers.length == 1) {
    deadMessage.innerText = `The player ${deadPlayer[0]} is eliminated`;
  } else {
    let eliminatedMessage = "The players ";
    for (let i = 0; i < deadPlayers.length; i++) {
      if (i + 1 < deadPlayers.length) {
        eliminatedMessage += deadPlayers[i] + ",";
      } else {
        eliminatedMessage += deadPlayers[i];
      }
    }
    deadMessage.innerText = eliminatedMessage + " are eliminated";
  }
};

function checkMovementPlayer() {
  for (let i = 0; i < arrayOfPlayers.length; i++) {
    // console.log(arrayOfPlayers[i].speedX);

    if(arrayOfPlayers[i].x < 1300 && arrayOfPlayers[i].speedX > 0 ){
      
      return true
    }
  }
  return false
}

const gamerOverDisplay = () => {
  dollSoundLevel1.pause();
  dollSoundLevel1.currentTime = 0;
  gameOverModal.style.display = "block";
  stopTimer();
  clearInterval(intervalTest);
  checkDeadPlayers();
  writeDeadMessage();
  for (let i = 0; i < arrayOfPlayers.length; i++) {
    arrayOfPlayers[i].speedX = 0;
  }
};

let gameOverStatus = false;

function gameOver() {

  console.log('doll status' , showDoll1)
  console.log('movement players' , checkMovementPlayer())

  if (!showDoll1 && checkMovementPlayer() ===  true) {

    console.log('condition 1')
    gamerOverDisplay();
    gameOverStatus = true;

  } else if (realTime() == 0 && playerWin === false) {
    console.log('condition 2')
    gamerOverDisplay();
    gameOverStatus = true;

  } else if (checkAllPlayersFinish()) {
    console.log('condition 3')
    gameOverStatus = true;
    //levelUp()
  }
}

const startGame = () => {
  gameOverStatus = false;
  leftDiv.style.display = "none";
  centralDiv.style.display = "none";
  gameBoard.style.display = "block";
  mainDiv.style.justifyContent = "flex-end";

  dollSoundLevel1.play();
  dollSoundLevel1.loop = true;

  startTimer();
  dollAnimation();
  updateCanvas();
};

// function levelUp(){
//   if (checkAllPlayersFinish() && realTime() > 0) {
//     dollSoundLevel1.pause()
//     dollSoundLevel1.currentTime = 0
//     resetTimer()
//     min = 00
//     sec = 60
//     levelUpModal.style.display = "block"
//     for (let i = 0; i < arrayOfPlayers.length; i++) {
//       arrayOfPlayers[i].x = 0
//       arrayOfPlayers[i].speedX = 0
//     }
//   }}

// function startAgain(){
//   levelUpModal.style.display = "none"
//   dollSoundLevel1.play()
// }

const playAgain = () =>{
  gameOverModal.style.display = "none"
  for(let i = 0; i < arrayOfPlayers.length; i++){
    location.reload()
  }
}

// const playLevel2 = () => {
//   levelUpModal.style.display = "none"
//   dollSoundLevel1.play()
//   dollAnimation()
// }

//EVENT LISTENERS

window.addEventListener("load", (event) => {
  //event listeners, algun código que quieras que se ejecute   despues de la carga
  startButton.addEventListener("click", startGame);

  playAgainButton.addEventListener('click', playAgain )

  // playLevel2Button.addEventListener("click", startAgain);

  //Keyup Event
  document.addEventListener("keyup", (event) => {
    if (event.which === 49) {
      arrayOfPlayers[0].speedX = 0;
    }
    if (event.which === 50) {
      arrayOfPlayers[1].speedX = 0;
    }
    if (event.which === 51) {
      arrayOfPlayers[2].speedX = 0;
    }
    if (event.which === 52) {
      arrayOfPlayers[3].speedX = 0;
    }
    if (event.which === 53) {
      arrayOfPlayers[4].speedX = 0;
    }
    if (event.which === 54) {
      arrayOfPlayers[5].speedX = 0;
    }
    if (event.which === 55) {
      arrayOfPlayers[6].speedX = 0;
    }
    if (event.which === 56) {
      arrayOfPlayers[7].speedX = 0;
    }
    if (event.which === 57) {
      arrayOfPlayers[8].speedX = 0;
    }
  })

  //   const spacePress = ()=> {

  // }
  //   spacePress()

  document.addEventListener("keydown", (event) => {
    if (event.key === " " && gameOverStatus === false) {
      for (let i = 0; i < arrayOfPlayers.length; i++) {
        arrayOfPlayers[i].speedX = Math.random() * (1.5 - 0.5 + 1) + 0.5;
        console.log(arrayOfPlayers[i].speedX);
      }
    }
  });
});

const updateCanvas = () => {
  if (imageLinks.length === counterForLoadedImages) {
    //  checkMovementPlayer();
    clearCanvas();
    updatePlayers();
    gameOver();

    if (showDoll1) {
      drawDoll1();
    } else {
      drawDoll2();
    }
    // console.log(checkMovementPlayer())
    drawPlayers();
  }
  requestAnimationFrame(updateCanvas); //Activa un loop infinito. Este loop va a l
};

//setInterval contador
//cuando ese contador llegue a lo que tu quieres
//se pinta una muñeca u otra
