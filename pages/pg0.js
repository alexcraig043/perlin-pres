function pg0()
{
    clear();
    prevButton.hide();
    pixelDensity(1);
    background(51);

    textAlign(CENTER);
    textFont('Oswald');
    fill(255);
    textSize(height / 12);
    textStyle(BOLD);

    text('How is This Created?', width / 2, height / 10);

    let scale = width / 2;
    let ratio = 169 / 300;

    image(mcImg, width / 4, height / 5, scale, scale * ratio)
}