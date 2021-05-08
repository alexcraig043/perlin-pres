var xoff = 0;

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
    text("Noisy Movement", width / 2, height / 10);

    var x = map(noise(xoff), 0, 1, 0, width);
    noStroke();
    ellipse(x, height / 2, 64, 64);
    xoff += .01;
}

function prevPage()
{
    window.location.href = 'pg2.html'
}

function nextPage()
{
    window.location.href = 'pg4.html'
}

