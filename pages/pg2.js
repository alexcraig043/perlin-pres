function pg2()
{
    prevButton.show()
    background(51);
    textAlign(CENTER);
    textFont('Oswald');
    fill(255);
    textSize(64);
    textStyle(BOLD);
    text("Random Movement", width / 2, height / 10);

    frameRate(3);
    var x = random(width / 2 - width / 3, width / 2 + width / 3);
    noStroke();
    ellipse(x, height / 2, 64, 64);
}


