class Umbrella{
    constructor(x,y,radius){
      var options={
        isStatic:true
      }
        this.radius=radius;
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("boyWithUmbrella.png");
        World.add(world, this.body);
    }
    display(){
        //var pos =this.body.position;
        //var angle = this.body.angle;
        //push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        //ellipseMode(CENTER);
        //strokeWeight(3);
        //stroke(146,217,255);
        //fill("blue");
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y);
        //pop();
      }
}