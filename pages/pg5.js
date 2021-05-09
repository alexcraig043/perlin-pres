function pg5()
{
    background(51);
    textStyle(BOLD);
    textAlign(CENTER);
    textFont('Oswald');
    fill(255);
    textSize(64);
    noStroke();
    text("Let's Graph Randomness", width / 2, height / 10);

    noFill();
    stroke(255);

    var y

    beginShape();
    for (var x = 20; x < width; x+=20)
    {
        y = random(height / 4, 3.5 * height / 4);
        vertex(x, y);
        strokeWeight(12);
        point(x,y);
        strokeWeight(2);
    }
    endShape();
    noLoop();
}
