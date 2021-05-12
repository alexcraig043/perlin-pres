
function pg13()
{
    background(51);
    frameRate(60);
    var scale = width / 800;
    var cols, rows;
    cols = floor(width / scale);
    rows = floor(height / scale);
    
    var start = Math.random() * 10000;
    var yoff = start;
    var inc = .015;
    var speed = .001;

    noiseDetail(4, .5);
    
    for (var y = rows / 8 + 1; y < 7 * rows / 8 - 1; y++)
    {
        var xoff = start;
        for (var x = cols / 12; x < 11 * cols / 12 - 1; x++)
        {
            noStroke();
            var terrain = map(noise(xoff, yoff), 0, 1, 0, 100);

            if (terrain < 35)
            {
                fill('#006994');
            }
            else if (terrain < 40)
            {
                fill('#EFDD6F');
            }
            else if (terrain < 60)
            {
                fill('#a0e65a');
            } 
            else if (terrain < 75)
            {
                fill('#977c53');
            }
            else 
            {
                fill('#fffafa');
            }
            
            rect (x * scale, y * scale, scale, scale);

            xoff += inc;
        }
        yoff += inc;
        start += speed;
    }

    textAlign(CENTER);
    textFont('Oswald');
    noStroke();
    fill(255);
    textSize(height / 15);
    textStyle(BOLD);
    text("2D Land", width / 2, height / 10);
    noLoop();
}