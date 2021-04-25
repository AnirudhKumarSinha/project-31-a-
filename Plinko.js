class Plinko {
  constructor(x, y) {
    var options = {
        'restitution':0.5,
        'isStatic':false,
        'friction':0.5,
         'density':2.5  

    }
    this.body = Bodies.circle(x,y,10,options)
    //this.width = 40;
    //this.height = 40;
    this.color=color(random(0,255),random(0,255),random(0,255))
    this.trajectory =[];
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    this.body.isStatic=false;
    push()
    translate(pos.x,pos.y);
    rotate(this.body.angle)
    imageMode(CENTER);
    
    fill(this.color);
    for (var i=0;i<10;i=i+40)
    {
    circle(0,i,10)
  
    }
    pop();
    
  }
};