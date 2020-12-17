let shellImg1 = document.getElementById("seashell1");
let shellImg2 = document.getElementById("seashell2");
let shellImg3 = document.getElementById("seashell3");
let piratePath = "assets/images/pirate.png";
let chestPath = "assets/images/chest.png";
let pearlPath = "assets/images/pearl.png";
let numShells = 3;
let openShell1
let openShell2
let openShell3

const randomPiratePosition = () => {
  let piratePosition = Math.floor(Math.random() * numShells)
  // console.log(piratePosition)
}

shellImg1.onclick = () => {
  shellImg1.src = piratePath;
};

shellImg2.onclick = () => {
  shellImg2.src = chestPath;
};

shellImg3.onclick = () => {
  shellImg3.src = pearlPath;
};
