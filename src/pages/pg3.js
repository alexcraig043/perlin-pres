function pg3()
{
    background(51);
    frameRate(60);
    textAlign(CENTER);
    textFont('Oswald');
    fill(255);
    textSize(height / 15);
    textStyle(BOLD);
    text("Noisy Movement", width / 2, height / 10);

    var x = map(noise(xoff), 0, 1, 0, width);
    noStroke();
    ellipse(x, height / 2, height / 15, height / 15);
    xoff += .01;
}

