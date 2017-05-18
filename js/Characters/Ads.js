export default class Ads {
  constructor(context) {
    this.context = context;
    this.sprite = 'assets/sprites/Ad.PNG';
    this.speed = 600;
    this.position = {
      x: Math.random()*window.innerWidth,
      y: -200
    }
    this.size = {
      height: 197,
      width: 253
    }
    this.Render = this.Render.bind(this);
  }

  Render(){
      this.context.drawImage(Resources.get(this.sprite), this.position.x, this.position.y);
  }

  Update(dt){
    this.position.y +=  this.speed * dt;
  }
}
