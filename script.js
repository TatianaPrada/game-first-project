const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 1000;
canvas.height = 500;




window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    }
