class Car{
   constructor(speed){
        this.x = random([100,210,320,440,550,660,770,880,990,1100,1210]);
        this.y = height-random([150,350,950,1050,1150,1750,1850,1950]);
        this.spt = createSprite(this.x,this.y);
        this.spt.shapeColor = random(["yellow","orange","magenta","red","blue"]);
        this.spt.addAnimation("car",carA);
        this.spt.scale=0.05;

        if(this.y==height-350 || this.y==height-1050 || this.y==height-1850)
        {
            speed=-speed;
            this.spt.addAnimation("car",carA1);
        }
        this.spt.velocityX = speed;
    }
   
}


