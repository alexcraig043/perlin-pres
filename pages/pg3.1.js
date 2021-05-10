var xoff = 0;

function pg3_1()
{
    background(51);
    frameRate(60);
    textAlign(CENTER);
    textFont('Oswald');
    fill(255);
    textSize(width / 30);
    textStyle(BOLD);
    text("Noise vs Randomness", width / 2, height / 10);

    //Noise:
    fill('#5ae6e6');
    var x = map(noise(xoff), 0, 1, 0, width);
    noStroke();
    ellipse(x, height / 3, 64, 64);
    xoff += .01;

    //Random:
    fill('#a0e65a');
    var x = random(width / 2 - width / 3, width / 2 + width / 3);
    noStroke();
    ellipse(x, 2 * height / 3, 64, 64);
}

