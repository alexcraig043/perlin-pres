function pg10()
{
    background(51);

    var scale = width / 100;
    var cols, rows;
    cols = floor(width / scale);
    rows = floor(height / scale);
    
    for (var y = rows / 8 + 1; y < 7 * rows / 8 - 1; y++)
    {
        for (var x = cols / 12; x < 11 * cols / 12 - 1; x++)
        {
            var gScale = random(255);
            fill(gScale);
            rect (x * scale, y * scale, scale, scale);
        }
    }

    noStroke();
    textAlign(CENTER);
    textFont('Oswald');
    noStroke();
    fill(255);
    textSize(width / 30);
    textStyle(BOLD);
    text("Random Grayscale", width / 2, height / 10);
    frameRate(10);
}