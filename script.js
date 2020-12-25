let shellImg1 = document.getElementById("seashell1");
let shellImg2 = document.getElementById("seashell2");
let shellImg3 = document.getElementById("seashell3");
let startButton = document.getElementById("start-row");
let piratePath = "assets/images/pirate.png";
let chestPath = "assets/images/chest.png";
let pearlPath = "assets/images/pearl.png";
let closedShell = "assets/images/closed_seashell.png";
let numShells = 3;
let openShell1;
let openShell2;
let openShell3;

const isPirate = (shell) => {
  if (shell.getAttribute("src") === piratePath) {
    return true;
  } else {
    return false;
  }
};

const isClicked = (shell) => {
  if (shell.getAttribute("src") === closedShell) {
    return false;
  } else {
    return true;
  }
};

const numOfPlays = (shell) => {
  numShells--;
  if (numShells === 0) {
    gameOver("win");
  } else if (isPirate(shell)) {
    gameOver();
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

randomPiratePosition();

seashell1.onclick = () => {
  if (!isClicked(shellImg1)) {
    seashell1.src = openShell1;
    numOfPlays(shellImg1);
  }
};

seashell2.onclick = () => {
  if (!isClicked(shellImg2)) {
    seashell2.src = openShell2;
    numOfPlays(shellImg2);
  }
};

seashell3.onclick = () => {
  if (!isClicked(shellImg3)) {
    seashell3.src = openShell3;
    numOfPlays(shellImg3);
  }
};

const gameOver = (status) => {
  if (status === "win") {
    startButton.innerHTML = "Winner! Play again?";
  } else {
    startButton.innerHTML = "Game over! Play again?";
  }
};
