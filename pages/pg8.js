var start = 0;

function pg8()
{
    background(51);
    textAlign(CENTER);
    textFont('Oswald');
    fill(255);
    textSize(64);
    textStyle(BOLD);
    noStroke();
    text("Octave Adjustment", width / 2, height / 10);

    textSize(28);
    text("Octaves: " + octaveSlider.value(), width / 2, (6.95/8) * height);

    noFill();
    stroke(255);

    var inc = .005;
    var scrollSpeed = .04;
    var yoff = start;
    var y;

    noiseDetail(octaveSlider.value(), .5);

    beginShape();
    for (var x = 0; x < width; x++)
    {
        y = map(noise(yoff), 0, 1, height / 6, height);
        vertex(x, y);
        strokeWeight(2);
        yoff += inc;
    }
    endShape();
    start += scrollSpeed;
}
