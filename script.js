let shellImg1 = document.getElementById("seashell1");
let shellImg2 = document.getElementById("seashell2");
let shellImg3 = document.getElementById("seashell3");
let piratePath = "assets/images/pirate.png";
let chestPath = "assets/images/chest.png";
let pearlPath = "assets/images/pearl.png";
let numShells = 3;
let openShell1;
let openShell2;
let openShell3;
let closedShell = "assets/images/closed_seashell.png";

document.body.onload = function () {
  randomPiratePosition();
};

const isClicked = (shell) => {};

const numOfPlays = () => {
  numShells--;
  if (numShells === 0) {
    console.log("Game Over!");
    // gameOver();
  }
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
  shellImg1.src = openShell1;
  numOfPlays();
};

shellImg2.onclick = () => {
  shellImg2.src = openShell2;
  numOfPlays();
};

shellImg3.onclick = () => {
  shellImg3.src = openShell3;
  numOfPlays();
};
