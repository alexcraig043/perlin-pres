var start = Math.random() * 10000;

function pg11()
{
    background(51);
    frameRate(60);
    var scale = width / 100;
    var cols, rows;
    cols = floor(width / scale);
    rows = floor(height / scale);
    
    var yoff = start;
    var inc = .1;
    var speed = .0015;
    
    for (var y = rows / 8 + 1; y < 7 * rows / 8 - 1; y++)
    {
        var xoff = start;
        for (var x = cols / 12; x < 11 * cols / 12 - 1; x++)
        {
            var gScale = noise(xoff, yoff) * 255;
            fill(gScale);
            rect (x * scale, y * scale, scale, scale);

            xoff += inc;
        }
        yoff += inc;
        start += speed;
    }

    noStroke();
    textAlign(CENTER);
    textFont('Oswald');
    noStroke();
    fill(gScale);
    textSize(width / 30);
    textStyle(BOLD);
    text("Noisy Grayscale: 2D Noise", width / 2, height / 10);
}