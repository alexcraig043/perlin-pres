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
    textAlign(CENTER);
    textFont('Oswald');
    fill(255);
    textSize(64);
    textStyle(NORMAL);
    text("What does this look like?", width / 2, height / 10);

    noFill();
    stroke(255);

    var inc = .005;
    var scrollSpeed = .02;
    var yoff = start;
    var y;

    noiseDetail(4, .5);

    beginShape();
    for (var x = 0; x < width; x++)
    {
        y = map(noise(yoff), 0, 1, height / 10, 9 * height / 10);
        vertex(x, y);
        strokeWeight(2);
        yoff += inc;
    }
    endShape();
    start += scrollSpeed;
}

function prevPage()
{
    window.location.href = 'pg7.html'
}

function nextPage()
{
    window.location.href = 'pg9.html'
}

