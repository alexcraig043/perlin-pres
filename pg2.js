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
    text("Random Movement", width / 2, height / 10);

    var x = random(width / 2 - width / 3, width / 2 + width / 3);
    noStroke();
    ellipse(x, height / 2, 64, 64);
}

function prevPage()
{
    window.location.href = 'pg1.html'
}

function nextPage()
{
    window.location.href = 'pg3.html'
}

