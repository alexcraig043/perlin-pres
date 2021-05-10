let rstart = Math.random()* 10000;
let gstart = Math.random() * 10000;
let bstart = Math.random() * 10000;

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

    var inc = map(incSlider.value(), 0, 10, 0, .2);
    var speed = .03;
    
    for (var y = rows / 8 + 1; y < 7 * rows / 8 - 1; y++)
    {
        var rxoff = rstart;
        var gxoff = gstart;
        var bxoff = bstart;
        for (var x = cols / 12; x < 11 * cols / 12 - 1; x++)
        {
            var r = map(noise(rxoff, ryoff), 0 , 1, 0, 255);
            var g = map(noise(gxoff, gyoff), 0 , 1, 0, 255);
            var b = map(noise(bxoff, byoff), 0 , 1, 0, 255);
            noStroke();
            fill(r, g, b);
            rect (x * scale, y * scale, scale, scale);

            rxoff -= inc;
            gxoff += inc;
            bxoff += inc;
        }
        ryoff -= inc;
        gyoff += inc;
        byoff -= inc;
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

    textSize(height / 30);
    text("Randomness: " + incSlider.value(), width / 2, (7.2/8) * height);
}