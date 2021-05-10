var start = 0;

function pg9()
{
    background('#459c3a');
    frameRate(60);

    noFill();
    stroke(255);

    var inc = .005;
    var scrollSpeed = .02;
    var yoff = start;
    var y;

    noiseDetail(octaveSlider.value(), .5);

    for (var x = 0; x < width; x+=2)
    {
        y = map(noise(yoff), 0, 1, height / 6, 9 * height / 10);

        strokeWeight(2);
        stroke(135, 206, 235);
        line(x, 0, x, y);

        yoff += inc;
    }

    textAlign(CENTER);
    textFont('Oswald');
    noStroke();
    fill(51);
    textSize(height / 15);
    textStyle(BOLD);
    text("Procedurally Generated Terrain!", width / 2, height / 10);

    textSize(height / 30);
    text("Octaves: " + octaveSlider.value(), width / 2, (7.2/8) * height);

    start += scrollSpeed;
    loop();
}

