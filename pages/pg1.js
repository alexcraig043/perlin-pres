function pg1()
{
    clear();
    prevButton.show();
    pixelDensity(1);
    background(51);

    textAlign(CENTER);
    textFont('Oswald');
    fill(255);
    textSize(height / 15);
    textStyle(BOLD);

    text('Perlin Noise', width / 2, height / 10);

    let scale = width / 4;
    let ratio = 251 / 201;

    image(vaseImg, width / 2.7, height / 5, scale, scale * ratio)
}
