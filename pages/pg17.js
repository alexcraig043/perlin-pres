function pg17()
{
    nextButton.hide();
    var scl = width / 60;
    var cols, rows;
    cols = floor(width / scl);
    rows = floor(height / scl);
    flowField = new Array(cols * rows);
    var inc = .08;
    var timeSpeed = .0002;
    var flowField = [];

    var yoff = 0;
    for (var y = .5; y < rows; y++)
    {
        var xoff = 0;
        for (var x = .5; x < cols; x++)
        {
            var index = floor(x + y);
            var angle = noise(xoff, yoff, zoff) * TWO_PI * 2;
            var v = p5.Vector.fromAngle(angle);
            v.setMag(.15);
            flowField[index] = v;
            xoff += inc;

        }
        yoff += inc;
        zoff += timeSpeed;
    }

    
    for (var i = 0; i < particles2.length; i++) 
    {
        particles2[i].follow(flowField, scl);
        particles2[i].update();
        particles2[i].edges();
        particles2[i].show();
    }
}