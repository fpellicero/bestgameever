import Loser from '../Characters/Loser';
import FallingStuff from '../Characters/FallingStuff';

export default class BestGameEver {
  constructor() {
    this._initCanvas();
    this.lastTime = Date.now();
    this.foo = "";
    this.HitOrMissCallback = this.HitOrMissCallback.bind(this);
    this.FallingStuff = new FallingStuff(this.ctx, this.HitOrMissCallback);
    this.Loser = new Loser(this.ctx, this.FallingStuff);
    this.Start = this.Start.bind(this);
    this.hits = 0;
    this.miss = 0;
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
    this.FallingStuff.Update(dt);
    this.FallingStuff.Render();
    this._printScore();
    window.requestAnimationFrame(this.Start);
  }

  HitOrMissCallback(hit){
    console.log(this);
    if(hit) this.hits++;
    else this.miss++;
  }

  _renderBackground() {
    this.ctx.drawImage(Resources.get("assets/sprites/background.jpg"), 0, 0, window.innerWidth, window.innerHeight);
  }

  _printScore() {
    this.ctx.save();
		this.ctx.fillStyle = "#D2312E";
    this.ctx.font = "30px Arial";
    this.ctx.textAlign = "end";
    this.ctx.fillText(`$${this.hits*100}`, window.innerWidth - 15, 80);
    let ctr = this.miss > 0 ? (this.hits / (this.miss + this.hits))*100 : 100;
    this.ctx.fillText(`CTR: ${Math.round(ctr)}%`, window.innerWidth - 15, 50);
    this.ctx.restore();
  }
}
