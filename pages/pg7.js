var start = 0;

function pg7()
{
    background(51);
    textAlign(CENTER);
    textFont('Oswald');
    fill(255);
    textSize(64);
    textStyle(BOLD);
    noStroke();
    text("Let's Graph Noise and Time", width / 2, height / 10);

    noFill();
    stroke(255);

    var inc = .08;
    var scrollSpeed = .01;
    var yoff = start;
    var y;

    noiseDetail(4, .5);

    beginShape();
    for (var x = 20; x < width; x+=20)
    {
        y = map(noise(yoff), 0, 1, 0, height);
        vertex(x, y);
        strokeWeight(12);
        point(x,y);
        strokeWeight(2);
        yoff += inc;
    }
    endShape();
    start += scrollSpeed;
}

