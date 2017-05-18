import {DIRECTION} from '../Helpers/Constants';

export default class Loser {
  constructor(context) {
      this.context = context;

      this._setSprites();

      this.spriteIndex = 0;
      this.currentSprite = "idle";
      this.currentDirection = null;
      this.lastFrameChange = Date.now();
      this.currentPosition = {
        x: 0,
        y: window.innerHeight - 215
      }

      this.Render = this.Render.bind(this);
      this.move = this.move.bind(this);
      this._walkOrRun = this._walkOrRun.bind(this);
      this._idle = this._idle.bind(this);

      this.bindEvents();
  }

  checkStartRunning(key) {
    let now = Date.now();
    if(this.lastKeyUp && this.lastKeyUp.key == key && now - this.lastKeyUp.time < 100) {
      return true;
    }
    let res = false;
    return res;
  }

  move(e) {
    let startRunning = this.checkStartRunning(e.keyCode);
    switch(e.keyCode) {
      case 37:
        this._walkOrRun(DIRECTION.LEFT, startRunning);
        break;
      case 39:
        this._walkOrRun(DIRECTION.RIGHT, startRunning);
        break;
      case 32:
        this._jump();
        break;
        case 13:
          this._attack();
          break;
      default:
        break;
    }
  }

  IsMoving() {
    return this.IsWalking() || this.IsRunning() || this.IsJumping();
  }

  IsRunning() {
    return this.currentSprite == "run";
  }

  IsWalking() {
    return this.currentSprite == "walk";
  }

  IsJumping(){
    return this.currentSprite == "jump";
  }

  IsAttacking(){
    return this.currentSprite == "attack";
  }

  Update(dt) {
    if(this.IsMoving()) {
      let modifier = this.direction == DIRECTION.LEFT ? -1 : 1;
      let increment = dt * modifier;

      let sprite = this.sprites[this.currentSprite];
      this.currentPosition.x +=  sprite.speed * dt * modifier ;
      if(this.currentPosition.x > window.innerWidth + sprite.width)  this.currentPosition.x = sprite.width * -1
      if(this.currentPosition.x < sprite.width*-1)  this.currentPosition.x = window.innerWidth + sprite.width
      this._animateJump();
    }
  }

  _animateJump(){
    if(this.IsJumping()){
      let modifier = this.spriteIndex >= 5 ? 1 : -1;
      let jumpSprite = this._getCurrentSprite();
      let increment = modifier * (jumpSprite.height / 20);
      //console.log(increment);
      this.currentPosition.y += increment;
      if(this.currentPosition.y > window.innerHeight - 215){
        this.currentPosition.y = window.innerHeight - 215;
      }
    }
  }

  _walkOrRun(direction, startRunning) {
    if(this.IsRunning() && direction == this.direction) return;
    if(!startRunning && this.IsWalking() && direction == this.direction) return;
    this.currentSprite = startRunning ? "run" : "walk";
    this.direction = direction;
    this.spriteIndex = 0;
  }

  _idle(e) {
    if(this.IsJumping() || this.IsAttacking()) return;
    this.lastKeyUp = {
      time: Date.now(),
      key: e.keyCode
    };
    this.currentSprite = "idle";
    this.spriteIndex = 0;
  }

  _jump(){
      if(this.IsJumping() || this.IsAttacking()) return;
      this.previousSprite = this._getCurrentSprite();
      this.currentSprite = "jump";
      this.spriteIndex = 0;
      //this.currentPosition.y -= this._getCurrentSprite().height / 2;
      this.sprites.jump.speed = this.previousSprite.speed;
  }

  _attack(){
    if(this.IsMoving() || this.IsAttacking()) return;
    this.previousSprite = this.sprites.idle;
    this.currentSprite = "attack";
    this.spriteIndex = 0;
  }

  _returnToPreviousSprite(){
    this.currentPosition.y = window.innerHeight - 215;
    this.currentSprite = this.previousSprite.name;
  }

  _getCurrentSprite(){
    return this.sprites[this.currentSprite];
  }

  bindEvents() {
    window.addEventListener("keydown", this.move, false);
    window.addEventListener("keyup", this._idle);
  }

  _setSprites() {
    const path = "assets/sprites/loser"
    this.sprites = {
      walk: {
        url: `${path}/walk.png`,
        speed: 100,
        width: 55,
        height: 129,
        name: 'walk'
      },
      idle: {
        url: `${path}/idle.png`,
        width: 49,
        height: 125,
        speed:0,
        name: 'idle'
      },
      run: {
        url: `${path}/run.png`,
        speed: 300,
        width: 112,
        height: 128,
        name: 'run'
      },
      jump: {
        url: `${path}/jump.png`,
        width: 91,
        height: 128,
        name: 'jump'
      },
      attack: {
        url: `${path}/attack.png`,
        width: 106,
        height: 128,
        name: 'attack'
      }
    }
  }

  Render() {
    let now = Date.now();
    if(now - this.lastFrameChange > 50) {
      this.lastFrameChange = now;

      if((this.IsJumping() || this.IsAttacking()) && this.spriteIndex == 9) {
        this._returnToPreviousSprite();
      }
      this.spriteIndex = (this.spriteIndex + 1) % 10;
    }

    const sprite = this.sprites[this.currentSprite];
    if(this.direction == DIRECTION.LEFT) {
      this.context.save();
      //MAGIC NUMBER OF THE DEATH
      this.context.translate(sprite.width + 2 * this.currentPosition.x, 0)
      this.context.scale(-1, 1);
    }
    this.context.drawImage(
      Resources.get(sprite.url),
      sprite.width * this.spriteIndex,
      0,
      sprite.width,
      sprite.height,
      this.currentPosition.x,
      this.currentPosition.y,
      sprite.width,
      sprite.height);
    if(this.direction == DIRECTION.LEFT) this.context.restore();
  }
}
