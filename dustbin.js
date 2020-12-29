class DustbinWall {
    constructor(x,y,width,height){
      var options = {
          isStatic: true,
          "restitution":0.3,
          "friction":1,
          "density":1.2
      }
      this.body = Bodies.rectangle(x,y,this.width,this.height,options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
      }
      display(){
          var pos = this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          
          rectMode(CENTER);
          fill("red")
          rect(10,100,this.width,this.height);
          pop();
      }
      };
      