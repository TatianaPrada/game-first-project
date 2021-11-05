//DOLL AUDIO

let dollSoundLevel1 = new Audio('./sounds/doll-sound-8sec.mpeg')
    dollSoundLevel1.preload = 'auto'

//Create the doll images

const doll1 = new Image()
doll1.src = "./images/evil_doll_1.png"

const drawDoll1 = ()=>{
  ctx.drawImage(doll1, 1224, 0, 276, 276)
}

const doll2 = new Image()
doll2.src = "./images/evil_doll_2.png"

const drawDoll2 = ()=>{
  ctx.drawImage(doll2, 1224, 0, 276, 276)
}