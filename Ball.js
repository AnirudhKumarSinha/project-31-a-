class Ball {
  constructor(x, y) {
    var options = {
        'restitution':0.5,
        'isStatic':false,
        'friction':0.5,
         'density':2.5  

    }
    this.body = Bodies.circle(x,y,15,options)
    //this.width = 40;
    //this.height = 40;
    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    this.body.isStatic=true;
    push()
    translate(pos.x,pos.y);
    rotate(this.body.angle)
    imageMode(CENTER);
    fill("yellow");
    for (var i=0;i<440;i=i+50)
    {
    circle(i,0,15)
  }

    pop();
    
  }
};