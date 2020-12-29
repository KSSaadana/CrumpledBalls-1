class Paper{
constructor(x,y){
var options = {
    isStatic: false,
    "restitution":0.1,
    "friction":1,
    "density":1.2
}
this.body = Bodies.rectangle(x,y,50,50,options);
this.width = 50;
this.height = 50;
World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    
    ellipseMode(CENTER);
    fill("white")
    ellipse(100,100,this.width,this.height);
    pop();
}
};


