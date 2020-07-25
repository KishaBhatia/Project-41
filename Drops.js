class Drops{
    constructor(x,y,radius){
        this.radius=radius;
        this.body=Bodies.circle(x, y,radius);
        this.velocity=Matter.Body.setVelocity(this.body,{x:0,y:1})
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      //push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      strokeWeight(3);
      stroke(146,217,255);
      fill("blue");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,this.radius,this.radius);
      //pop();
    }
    update(){
      if(this.body.position.y>750){
        Matter.Body.setPosition(this.body,{x:random(1,500),y:random(0,800)})
        Matter.Body.setVelocity(this.body,{x:0,y:5})      
      }
    }
}
