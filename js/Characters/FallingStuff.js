import Ads from '../Characters/Ads';
export default class FallingStuff {
    constructor(context, HitOrMissCallback){
      this.context = context;
      this.HitOrMissCallback = HitOrMissCallback;
      this.ads = [];
      this.lastAdTime = Date.now();
    }

    Update(dt){
      var now = Date.now();
      if(now - this.lastAdTime > 2500){
        this.ads.push(new Ads(this.context));
        this.lastAdTime = now;
      }
      for (var i = 0; i < this.ads.length; i++) {
        if(this.ads[i].position.y > window.innerHeight){
          this.ads.splice(i,1);
          this.HitOrMissCallback(false);
        }
        else{
            this.ads[i].Update(dt);
        }
      }
    }

    Render(dt){
      for (var i = 0; i < this.ads.length; i++) {
        this.ads[i].Render();
      }
    }

    CheckCollisions(playerPosition, playerSprite){
      var playerRectangle = {
        x1: playerPosition.x,
        y1: playerPosition.y,
        x2: playerPosition.x + playerSprite.width,
        y2: playerPosition.y + playerSprite.height
      }
      for (var i = 0; i < this.ads.length; i++) {
        var ad = this.ads[i];
        var adRectangle = {
          x1: ad.position.x,
          y1: ad.position.y,
          x2: ad.position.x + ad.size.width,
          y2: ad.position.y + ad.size.height
        }
        if(this.RectangleIntersection(playerRectangle, adRectangle)){
          this.ads.splice(i,1);
          this.HitOrMissCallback(true);
          i--;
        }
      }
    }

    RectangleIntersection(rect1, rect2) {
      if (rect1.x1 < rect2.x2 &&
         rect1.x2 > rect2.x1 &&
         rect1.y1 < rect2.y2 &&
         rect1.y2 > rect2.y1) {
          return true;
      }
      return false;
    }
}
