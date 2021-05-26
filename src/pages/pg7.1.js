var start = 0;

function pg7_1()
{
    background(51);
    textAlign(CENTER);
    textFont('Oswald');
    fill(255);
    textSize(height / 15);
    textStyle(BOLD);
    noStroke();
    text("Noise vs Randomness", width / 2, height / 10);

    noFill();
    stroke(255);

    var inc = .08;
    var scrollSpeed = .01;
    var yoff = start;
    var y;

    noiseDetail(4, .6);

    //Noise Shape:
    beginShape();
    for (var x = 20; x < width; x+=20)
    {
        //Noise:
        stroke('#5ae6e6');
        y = map(noise(yoff), 0, 1, height / 8, height / 2);
        vertex(x, y);
        strokeWeight(12);
        point(x,y);
        strokeWeight(2);
        yoff += inc;
    }
    endShape();
    start += scrollSpeed;

    //Random Shape:
    beginShape();
    for (var x = 20; x < width; x+=20)
    {
        stroke('#a0e65a');
        y = random(height / 1.6, 1.5 * height / 1.6);
        vertex(x, y);
        strokeWeight(12);
        point(x,y);
        strokeWeight(2);
    }
    endShape();
}

