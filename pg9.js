var start = 0;

function setup()
{
    clear();
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);

    nextButton2 = createButton('Next');
    styleButton(nextButton2, false);
    nextButton2.mouseClicked(nextPage);

    prevButton2 = createButton('Prev');
    styleButton(prevButton2, true);
    prevButton2.mouseClicked(prevPage);
    
}

function draw()
{
    background(51);

    noFill();
    stroke(255);

    var inc = .005;
    var scrollSpeed = .02;
    var yoff = start;
    var y;

    noiseDetail(5, .5);

    for (var x = 0; x < width; x+=2)
    {
        y = map(noise(yoff), 0, 1, height / 10, 9 * height / 10);

        strokeWeight(2);
        stroke(135, 206, 235);
        line(x, 0, x, y);
        stroke(51);
        line(x, y, x, height);

        yoff += inc;
    }

    textAlign(CENTER);
    textFont('Oswald');
    noStroke();
    fill(51);
    textSize(64);
    textStyle(BOLD);
    text("Procedurally Generated 2D Terrain", width / 2, height / 10);

    start += scrollSpeed;
}

function prevPage()
{
    window.location.href = 'pg8.html'
}

function nextPage()
{
    window.location.href = 'pg10.html'
}

