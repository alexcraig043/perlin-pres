var inc = .004;

function pg6()
{
    background(51);
    textAlign(CENTER);
    textFont('Oswald');
    fill(255);
    textSize(width / 30);
    textStyle(BOLD);
    noStroke();
    text("Let's Graph Noise", width / 2, height / 10);

    noFill();
    stroke(255);

    var y;
    var yoff = random(10000);
    var inc = .1;

    noiseDetail(4, .5);

    beginShape();
    for (var x = 20; x < width; x+=20)
    {
        y = map(noise(yoff), 0, 1, height / 4, 3.5 * height / 4);
        vertex(x, y);
        strokeWeight(12);
        point(x,y);
        strokeWeight(2);
        yoff += inc;
    }
    endShape();
    noLoop();
}

