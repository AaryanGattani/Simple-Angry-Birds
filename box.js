class Box {
  constructor(x, y, width, height) 
  {
    var options = 
    {
        'restitutions':0.8,
        'friction':0.3,
        'density':0.9,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
     
  }
  display(){
    var pos =this.body.position;
    var ang =this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(ang);
    rectMode(CENTER);
    fill(255);
    strokeWeight(4);
    stroke("green");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
