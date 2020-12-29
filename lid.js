class Lid{
    constructor(x,y){
    var options = {
        isStatic: false,
        "restitution":0.1,
        "friction":1,
        "density":1.2
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
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
        rect(100,100,this.width,this.height);
        pop();
    }
    };
    