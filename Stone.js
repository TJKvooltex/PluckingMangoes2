class Stone{

    constructor(x,y,r){
    var options={
        
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    
    
    
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    }
    display(){
    rectMode(CENTER);
    fill("white");
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    
    }
    
    
    
    }

