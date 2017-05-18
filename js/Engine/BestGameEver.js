import Loser from '../Characters/Loser';

export default class BestGameEver {
  constructor() {
    this._initCanvas();
    this.lastTime = Date.now();
    this.foo = "";
    this.Loser = new Loser(this.ctx);
    this.Start = this.Start.bind(this);
  }

  _initCanvas() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d')

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    document.body.appendChild(this.canvas);
  }

  _getDt() {
    let now = Date.now();
    let dt = (now - this.lastTime) / 1000.0;
    this.lastTime = now;
    return dt;
  }

  Start() {
    let dt = this._getDt()
    this._renderBackground();
    this.Loser.Update(dt);
    this.Loser.Render();
    window.requestAnimationFrame(this.Start);
  }

  _renderBackground() {
    this.ctx.drawImage(Resources.get("assets/sprites/background.jpg"), 0, 0, window.innerWidth, window.innerHeight);
  }
}
