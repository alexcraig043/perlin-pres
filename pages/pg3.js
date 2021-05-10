function pg3()
{
    background(51);
    frameRate(60);
    textAlign(CENTER);
    textFont('Oswald');
    fill(255);
    textSize(width / 30);
    textStyle(BOLD);
    text("Noisy Movement", width / 2, height / 10);

    var x = map(noise(xoff), 0, 1, 0, width);
    noStroke();
    ellipse(x, height / 2, 64, 64);
    xoff += .01;
}

