import * as PIXI from 'pixi.js';

//Aliases
var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer


//Create a Pixi stage and renderer and add the 
//renderer.view to the DOM
const stage = new Container(),
    renderer = autoDetectRenderer(512, 512);
document.body.appendChild(renderer.view);


//Define any variables that are used in more than one function
let cat, state;

function setup() {
  state = play;
  gameLoop();
}

function gameLoop(){

  //Loop this function 60 times per second
  requestAnimationFrame(gameLoop);

  //Update the current game state:
  state();

  //Render the stage
  renderer.render(stage);
}

function play() {}
