function setup()
{
    clear();
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    background(51);

    textAlign(CENTER);
    textFont('Oswald');
    fill(255);
    textSize(64);
    textStyle(BOLD);

    text('What is Perlin Noise?', width / 2, height / 10);

    nextButton = createButton('Next');
    styleButton(nextButton, false);
    nextButton.mouseClicked(nextPage);

}

function nextPage() 
{
    window.location.href = 'pg2.html';
}
