class paper {
    constructor(x,y,radius){
      var option={
        isStatic:false,
        restitution:0.3,
        friction:0.5, 
        density:1.2
      }
      Matter.Bodies.circle(x,y, radius, option);
      radius = 1;
      World.add(world,paper);
    }
    display(){
      strokeWeight(3);
      ellipse(56,670,55);
    }
};