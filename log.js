class LOG {
    constructor(x, y, height, angle) 
    {
      var options = 
      {
          'restitutions':0.8,
          'friction':1.8,
          'density':0.9,
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 30;
      this.height = height;
      Matter.Body.setAngle(this.body, angle)
      World.add(world, this.body);
       
    }
    display(){
      var pos =this.body.position;
      var ang =this.body.angle
      push();
      translate(pos.x,pos.y);
      rotate(ang);
      rectMode(CENTER);
      fill(255);
      strokeWeight(4);
      stroke("Brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  