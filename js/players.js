//IMAGE

const loadedImages = {}

const imageLinks = [
  {link: "../images/players/player_1.png", name: 'player1'},
  {link: "../images/players/player_2.png", name: 'player2'},
  {link: "../images/players/player_3.png", name: 'player3'},
  {link: "../images/players/player_4.png", name: 'player4'},
  {link: "../images/players/player_5.png", name: 'player5'},
  {link: "../images/players/player_6.png", name: 'player6'},
  {link: "../images/players/player_7.png", name: 'player7'},
  {link: "../images/players/player_8.png", name: 'player8'}
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
  constructor(ownY, ownName){
    this.name = ownName
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
const player1 = new Players(ySum, "1")
arrayOfPlayers.push(player1)
ySum += 97
const player2 = new Players(ySum, "2")
arrayOfPlayers.push(player2)
ySum += 97
const player3 = new Players(ySum, "3")
arrayOfPlayers.push(player3)
ySum += 97
const player4 = new Players(ySum, "4")
arrayOfPlayers.push(player4)
ySum += 97
const player5 = new Players(ySum, "5")
arrayOfPlayers.push(player5)
ySum += 97
const player6 = new Players(ySum, "6")
arrayOfPlayers.push(player6)
ySum += 96
const player7 = new Players(ySum, "7")
arrayOfPlayers.push(player7)
ySum += 96
const player8 = new Players(ySum, "8")
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
