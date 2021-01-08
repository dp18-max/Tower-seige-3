class Block{
    constructor(x, y, width, height, angle) {
        var options = {
          restitution : 0.7,
          friction : 0.5,
          isStatic : false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<7){
             this.pos=this.body.position;
            push();
            translate(this.pos.x,this.pos.y)
            rectMode(CENTER);
            fill("red")
            rect(0,0,30,40);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            tint(255,this.visibility);
            this.visibility=this.visibility-5;
            pop();
        }
      }
    }
