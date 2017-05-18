import BestGameEver from './Engine/BestGameEver';
require('./Helpers/Resources');

const path = "assets/sprites"
var sprites = [
  `${path}/loser/walk.png`,
  `${path}/loser/run.png`,
  `${path}/loser/idle.png`,
  `${path}/loser/jump.png`,
  `${path}/background.jpg`,
  `${path}/loser/attack.png`,
  `${path}/Ad.PNG`,
]

window.onload = function() {
  Resources.load(sprites);
  Resources.onReady(startGame);
}

function startGame() {
  new BestGameEver().Start();
}
