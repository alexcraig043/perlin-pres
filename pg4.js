var xoff = 0;
var yoff = 1000;

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
    text("Noisy 2D Movement", width / 2, height / 10);

    var x = map(noise(xoff), 0, 1, 0, width);
    var y = map(noise(yoff), 0, 1, height / 10, height);
    noStroke();
    ellipse(x, y, 64, 64);
    xoff += .01;
    yoff += .01;
}

function prevPage()
{
    window.location.href = 'pg3.html'
}

function nextPage()
{
    window.location.href = 'pg5.html'
}

