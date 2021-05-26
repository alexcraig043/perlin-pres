class Particle
{
    constructor(size) 
    {
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.maxVel = 4;

        var rstart = Math.random()* 10000;
        var gstart = Math.random() * 10000;
        var bstart = Math.random() * 10000;

        var inc = .01;
    
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
    
        if (size === 'large')
        {
            this.show = function()
            {
                stroke('#a0e65a');
                strokeWeight(height / 15);
                line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
                this.updatePrev();
                point(this.pos.x, this.pos.y);
            }
        }
        else if (size === 'small')
        {
            this.show = function()
            {
                var roff = rstart;
                var goff = gstart;
                var boff = bstart;

                var r = map(noise(roff), 0 , 1, 0, 255);
                var g = map(noise(goff), 0 , 1, 0, 255);
                var b = map(noise(boff), 0 , 1, 0, 255);

                stroke(r, g, b, 255);
                strokeWeight(height / 80);
                this.updatePrev();
                point(this.pos.x, this.pos.y);

                rstart += inc;
                gstart += inc;
                bstart += inc;
            }
        }
        else
        {
            this.show = function()
            {
                var roff = rstart;
                var goff = gstart;
                var boff = bstart;

                var r = map(noise(roff), 0 , 1, 0, 255);
                var g = map(noise(goff), 0 , 1, 0, 255);
                var b = map(noise(boff), 0 , 1, 0, 255);

                stroke(r, g, b, 5);
                strokeWeight(1);
                line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
                this.updatePrev();

                rstart += inc;
                gstart += inc;
                bstart += inc;
            }
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

        this.follow = function(vectors, scl)
        {
            var x = floor(this.pos.x / scl);
            var y = floor(this.pos.y / scl);
            var index = x + y;
            var force = vectors[index];
            this.applyForce(force);
        }
    }

}
    
