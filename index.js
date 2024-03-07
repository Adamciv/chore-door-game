// Access HTML elements
const doorImage1=document.getElementById('door1')
const doorImage2=document.getElementById('door2')
const doorImage3=document.getElementById('door3')
const startButton=document.getElementById('start')
const myn=document.getElementById('rnum')
myn.style.color = 'white'
myn.style.textAlign = "center";




let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

// Define game logic to check doors, progress game, end game, and choose a random chore door

//5,6
function isClicked(door){
  if(door.src===closedDoorPath){
    return true;
  } else{return false;}
}

//7
 function isBot(door){
  if(door.src===botDoorPath){
    return true;
  }else{return false;}
 }

//8,9,10

function gameOver(status){
  if(status==='win'){
    startButton.innerHTML='win! Play again?'
  }else{
    startButton.innerHTML='Game over! Play again?'
  }
currentlyPlaying = false;
}

//11,12
function playDoor(door){
  numClosedDoors--;
  if(numClosedDoors===0){
    gameOver('win');
  }else if(isBot(door)){
    gameOver();
  }
}

//14,15,16,17
function randomChoreDoorGenerator(){
  let choreDoor=Math.floor(Math.random()*numClosedDoors);
  if(choreDoor===0){
    openDoor1=botDoorPath;
    openDoor2=beachDoorPath;
    openDoor3=spaceDoorPath;
  }else if(choreDoor===1){
    openDoor1=beachDoorPath;
    openDoor2=botDoorPath;
    openDoor3=spaceDoorPath;
  }else if(choreDoor===2){
    openDoor1=beachDoorPath;
    openDoor2=spaceDoorPath;
    openDoor3=botDoorPath;
  }
  myn.innerHTML=`The random number is ${choreDoor}`
}

////////////////

doorImage1.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
}

// Start a game round
//19
function startRound(){
  doorImage1.src=closedDoorPath;
  doorImage2.src=closedDoorPath;
  doorImage3.src=closedDoorPath;
  numClosedDoors=3;
  currentlyPlaying=true;
  startButton.innerHTML = 'Good Luck!';
  randomChoreDoorGenerator();

}

startRound()
