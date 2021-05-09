function pg1()
{
    clear();
    prevButton.hide();
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    background(51);
    frameRate(60);

    textAlign(CENTER);
    textFont('Oswald');
    fill(255);
    textSize(64);
    textStyle(BOLD);

    text('What is Perlin Noise?', width / 2, height / 10);
}
