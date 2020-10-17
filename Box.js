  class Box{ 
constructor(x,y,width,height){   

    var options = { 
        restitution: 1.0 
    
    }
this.body = Bodies.rectangle(x,y,width,height,options) 
this.width = width 
this.height = height
World.add(myworld,this.body)
}
display(){  
    var angle = this.body.angle 
    var pose = this.body.position   
    push()
    translate(pose.x,pose.y)
    rotate(angle)
    rectMode(CENTER) 
    rect(0,0,this.width,this.height) 
    //stroke("blue") 
    pop()
    //line(0,0,this.body.position.x,this.body.position.y)  
    
}





  }