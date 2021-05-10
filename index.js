var pages = [page1, page2, page3, page3_1, page4, page5, page6, page7, page7_1, page8, page9, page10, page11, page12];
var pgIndex = 0;
var loopToggle = false;
var nextButton;
var prevButton;
var reDrawButton;
var octaveSlider;

function setup()
{
    clear();
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    frameRate(60);

    drawElements();
}

function draw()
{
    pages[pgIndex]();
}

function nextPage()
{
    pgIndex++;
    loop();
}

function prevPage()
{
    pgIndex--;
    loop();
}

function drawElements()
{
    nextButton = createButton('Next');
    styleButton(nextButton, false);
    nextButton.mouseClicked(nextPage);

    prevButton = createButton('Prev');
    styleButton(prevButton, true);
    prevButton.mouseClicked(prevPage)

    reDrawButton = createButton('Redraw');
    styleButton(reDrawButton, 'bottom');
    reDrawButton.mouseClicked(redraw);
    hideReDraw();

    loopButton = createButton('Loop');
    styleButton(loopButton, 'bottom');
    loopButton.mouseClicked(toggleLoop);
    hideLoop();

    octaveSlider = createSlider(1, 8, 4, 1);
    styleSlider(octaveSlider);
    hideOctave();
}

function styleButton(button, pos)
{
    if (pos == true) 
    {
        button.position(width / 60, height / 2 - 25);
    } 
    else if (pos == false)
    {
        button.position(56 * width / 60, height / 2 - 25);
    }
    else if (pos == "bottom")
    {
        button.position(width / 2 - 1.1 * button.width, 7 * height / 8);
    }
    button.style('background-color: #e65a5a');
    button.style('border: none');
    button.style('color: white');
    button.style('font: Oswald');
    button.style('font-size: 3.5vh');
    button.style('border-radius: 8px');
    button.style('padding: 12px');
    button.style('padding-top: 8px');
    button.style('padding-bottom: 8px');

    button.mouseOver(shade);
    button.mouseOut(unshade);

    function shade()
    {
        button.style('background-color: #9e3e3e');
    }

    function unshade()
    {
        button.style('background-color: #e65a5a');
    }
}

function styleSlider(slider)
{
    slider.position(width / 2, (7/8) * height).center('horizontal');
}


function showReDraw()
{
    reDrawButton.show();
}

function hideReDraw()
{
    reDrawButton.hide();
}

function showOctave()
{
    octaveSlider.show();
}

function hideOctave()
{
    octaveSlider.hide();
}

function toggleLoop()
{
    if (loopToggle) 
    {
        noLoop();
        loopToggle = false;
    }
    else
    {
        loop();
        loopToggle = true;
    }
}

function showLoop()
{
    loopButton.show();
}

function hideLoop()
{
    loopButton.hide();
}

function windowResized()
{
    removeElements();
    resizeCanvas(windowWidth, windowHeight);
    drawElements();
}

/** Functions to return each page and show/hide their elements*/
function page1() {return pg1();}
function page2() {return pg2();}
function page3() {return pg3();}
function page3_1() {return pg3_1();}
function page4() {return pg4();}
function page4() {hideReDraw(); return pg4();}
function page5() {showReDraw(); return pg5();}
function page6() {showReDraw(); return pg6();}
function page7() {hideReDraw(); return pg7();}
function page7_1() {hideOctave(); return pg7_1();}
function page8() {showOctave(); return pg8();}
function page9() {showOctave(); hideReDraw(); hideLoop(); return pg9();}
function page10() {hideOctave(); showLoop(); return pg10();}
function page11() {showLoop(); return pg11();}
function page12() {showLoop(); return pg12();}