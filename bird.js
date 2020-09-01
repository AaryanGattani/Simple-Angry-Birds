class BIRD {
    constructor(x, y) 
    {
      var options = 
      {
          'restitutions':0.8,
          'friction':0.3,
          'density':0.9,
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 65;
      this.height = 65;
      
      World.add(world, this.body);
       
    }
    display(){
      var pos =this.body.position;
      var ang =this.body.angle;
      pos.x=mouseX;
      pos.y=mouseY;
      push();
      translate(pos.x,pos.y);
      rotate(ang);
      rectMode(CENTER);
      fill("red");
      strokeWeight(4);
      stroke("black");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  