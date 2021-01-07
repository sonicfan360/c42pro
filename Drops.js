class drops{
    constructor(x,y,r){
        var options = {
            restitution : .5,
            density: 1,
            friction: 1
        }
        this.body = Bodies.circle(x,y,r,options);
        this.radius = r
        World.add(world, this.body);
        
      }
      display(){
          var pos = this.body.position;
          push()
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius, this.radius) 
          pop() 
      }
}