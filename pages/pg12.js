var rstart = Math.random()* 10000;
var gstart = Math.random() * 10000;
var bstart = Math.random() * 10000;

function pg12()
{
    background(51);
    frameRate(60);
    var scale = width / 100;
    var cols, rows;
    cols = floor(width / scale);
    rows = floor(height / scale);

    var ryoff = rstart;
    var gyoff = gstart;
    var byoff = bstart;

    var inc = .1;
    var speed = .03;
    
    for (var y = rows / 8 + 1; y < 7 * rows / 8 - 1; y++)
    {
        var rxoff = rstart;
        var gxoff = gstart;
        var bxoff = bstart;
        for (var x = cols / 12; x < 11 * cols / 12 - 1; x++)
        {
            var r = noise(rxoff, ryoff) * 255;
            var g = noise(gxoff, gyoff) * 255;
            var b = noise(bxoff, byoff) * 255;
            fill(r, g, b);
            rect (x * scale, y * scale, scale, scale);

            rxoff += inc;
            gxoff += inc;
            bxoff += inc;
        }
        ryoff += inc;
        gyoff += inc;
        byoff += inc;
    }

    rstart += speed;
    gstart += speed;
    bstart += speed;

    noStroke();
    textAlign(CENTER);
    textFont('Oswald');
    noStroke();
    fill(r, g, b);
    textSize(height / 15);
    textStyle(BOLD);
    text("Noisy Rainbow", width / 2, height / 10);
}