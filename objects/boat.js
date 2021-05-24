class Boat
{
    constructor() 
    {
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.maxVel = 4;
    
        this.prevPos = this.pos.copy();

        this.update = function () 
        {
            this.vel.add(this.acc);
            this.vel.limit(this.maxVel);
            this.pos.add(this.vel);
            this.acc.mult(0);
        }
    
        this.applyForce = function(force)
        {
            this.acc.add(force);
        }
    
        this.show = function()
        {
            stroke(255);
            strokeWeight(50);
            this.updatePrev();
            point(this.pos.x, this.pos.y);
        }
    
        this.updatePrev = function() 
        {
            this.prevPos.x = this.pos.x;
            this.prevPos.y = this.pos.y;
        }

        this.edges = function()
        {
            if (this.pos.x > width) 
            {
                this.pos.x = 0;
                this.updatePrev();
            }
            if (this.pos.x < 0) 
            {
                this.pos.x = width;
                this.updatePrev();
            }
            if (this.pos.y > height) 
            {
                this.pos.y = 0;
                this.updatePrev();
            }
            if (this.pos.y < 0) 
            {
                this.pos.y = height;
                this.updatePrev();
            }
        }

        this.follow = function(vectors, scl, cols)
        {
            var x = floor(this.pos.x / scl);
            var y = floor(this.pos.y / scl);
            var index = x + y * cols;
            var force = vectors[index];
            console.log(force)
            this.applyForce(force);
        }
    }

}
    
