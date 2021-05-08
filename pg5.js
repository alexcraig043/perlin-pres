var xoff = 0;
var yoff = 1000;
var inc = .004;
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
    textStyle(BOLD);
    text("Let's Graph Randomness", width / 2, height / 10);

    noFill();
    stroke(255);

    var y

    beginShape();
    for (var x = 4 * width / 60; x < 56 * width / 60; x+=20)
    {
        y = random(height / 8, 7 * height / 8);
        vertex(x, y);
        strokeWeight(12);
        point(x,y);
        strokeWeight(2);
        yoff += inc;
    }
    endShape();
    noLoop();
}

function prevPage()
{
    window.location.href = 'pg4.html'
}

function nextPage()
{
    window.location.href = 'pg6.html'
}

