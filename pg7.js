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
    text("Let's Graph Noise And Time", width / 2, height / 10);

    noFill();
    stroke(255);

    var inc = .08;
    var scrollSpeed = .01;
    var yoff = start;
    var y;

    noiseDetail(4, .5);

    beginShape();
    for (var x = 4 * width / 60; x < 56 * width / 60; x+=20)
    {
        y = map(noise(yoff), 0, 1, 0, height);
        vertex(x, y);
        strokeWeight(12);
        point(x,y);
        strokeWeight(2);
        yoff += inc;
    }
    endShape();
    start += scrollSpeed;
}

function prevPage()
{
    window.location.href = 'pg6.html'
}

function nextPage()
{
    window.location.href = 'pg8.html'
}

