let shellImg1 = document.getElementById("seashell1");
let shellImg2 = document.getElementById("seashell2");
let shellImg3 = document.getElementById("seashell3");
let piratePath = "assets/images/pirate.png";
let chestPath = "assets/images/chest.png";
let pearlPath = "assets/images/pearl.png";
let closedShell = "assets/images/closed_seashell.png";
let numShells = 3;
let openShell1;
let openShell2;
let openShell3;

document.body.onload = function () {
  randomPiratePosition();
};

const isClicked = (shell) => {
  shell.src === closedShell ? false : true;
};

const numOfPlays = () => {
  numShells--;
  numShells === 0 ? gameOver() : null;
};

const randomPiratePosition = () => {
  let piratePosition = Math.floor(Math.random() * numShells);
  if (piratePosition === 0) {
    openShell1 = piratePath;
    openShell2 = chestPath;
    openShell3 = pearlPath;
  } else if (piratePosition === 1) {
    openShell2 = piratePath;
    openShell1 = chestPath;
    openShell3 = pearlPath;
  } else {
    openShell3 = piratePath;
    openShell1 = chestPath;
    openShell2 = pearlPath;
  }
};

shellImg1.onclick = () => {
  !isClicked(openShell1) ? (shellImg1.src = openShell1, numOfPlays()) : null;
};

shellImg2.onclick = () => {
  !isClicked(openShell2) ? (shellImg2.src = openShell2, numOfPlays()) : null;
};

shellImg3.onclick = () => {
  !isClicked(openShell3) ? (shellImg3.src = openShell3, numOfPlays()) : null;
};

const gameOver = () => {
  console.log('game over')
}