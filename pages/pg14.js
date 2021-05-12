var zoff = 0;

function pg14()
{
    background(51);
    var scl = width / 60;
    var cols, rows;
    cols = floor(width / scl);
    rows = floor(height / scl);
    flowField = new Array(cols * rows);
    var inc = .08;
    var timeSpeed = .0002;
    var flowField = [];

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

            stroke(255, 200);
            push();
            translate(x * scl, y * scl);
            rotate(v.heading());
            strokeWeight(1);
            line(0, 0, scl - (scl / 5), 0);
            pop();
        }
        yoff += inc;
        zoff += timeSpeed;
    }

    textAlign(CENTER);
    textFont('Oswald');
    noStroke();
    fill(255);
    textSize(height / 15);
    textStyle(BOLD);
    text("Vector Flow Field", width / 2, height / 10);
}
