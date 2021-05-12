var inc = .08;
var timeSpeed = .0003;
var scl = 30;
var numParticles = 2000;
var cols, rows;
var particles = [];
var flowField = [];
var zoff = 0;

// function setup()
// {
//     createCanvas(windowWidth, windowHeight);
//     pixelDensity(1);
//     cols = floor(width / scl);
//     rows = floor(height / scl);

//     flowField = new Array(cols * rows);

//     for (var i = 0; i < numParticles; i++)
//     {
//         particles[i] = new Particle();
//     }
//     background(255);
// }

function pg15()
{
    // background(255);
    var yoff = 0;
    for (var y = 0; y < rows; y++)
    {
        var xoff = 0;
        for (var x = 0; x < cols; x++)
        {
            var index = (x + y * cols);
            var angle = noise(xoff, yoff, zoff) * TWO_PI * 2;
            var v = p5.Vector.fromAngle(angle);
            v.setMag(.2);
            flowField[index] = v;
            xoff += inc;

            // stroke(0, 100);
            // push();
            // translate(x * scl, y * scl);
            // rotate(v.heading());
            // strokeWeight(1);
            // line(0, 0, scl, 0);
            // pop();
        }
        yoff += inc;
        zoff += timeSpeed;
    }

    for (var i = 0; i < particles.length; i++) 
    {
        particles[i].follow(flowField);
        particles[i].update();
        particles[i].edges();
        particles[i].show();
    }

    //noLoop();
}
