var drawPages = [page0, page1, page2, page3, page3_1, page4, 
        page5, page6, page7, page7_1, page8, page9, 
        page10, page11, page12, page13, page14, page15, page16];
// var setupPages = [pageSetup1, pageSetup2, pageSetup3, pageSetup3_1, pageSetup4, 
//         pageSetup5, pageSetup6, pageSetup7, pageSetup7_1, pageSetup8, pageSetup9, 
//         pageSetup10, pageSetup11, pageSetup12, pageSetup13, pageSetup14, pageSetup15, pageSetup16];
var pgIndex = 0;
var loopToggle = true;
var nextButton;
var prevButton;
var reDrawButton;
var octaveSlider;
var vaseImg;
var mcImg;

function preload()
{
    vaseImg = loadImage('assets/vase.png');
    mcImg = loadImage('assets/minecraft.jpg');
}

function setup()
{
    clear();
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    frameRate(60);

    drawElements();
    hideElements();

}

function draw()
{
    console.log(pgIndex);
    drawPages[pgIndex]();
}

function nextPage()
{
    pgIndex++;
    // setupPages[pgIndex];

    loopToggle = true;
    hideElements();
    background(51);  
    pixelDensity(1);
    frameRate(60);
    loop();
}

function prevPage()
{
    pgIndex--;
    // setupPages[pgIndex];

    loopToggle = true;
    hideElements();  
    background(51);  
    pixelDensity(1);
    frameRate(60);
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

    loopButton = createButton('Loop');
    styleButton(loopButton, 'bottom');
    loopButton.mouseClicked(toggleLoop);

    octaveSlider = createSlider(1, 8, 4, 1);
    styleSlider(octaveSlider);

    incSlider = createSlider(1, 10, 5, 1);
    styleSlider(incSlider);
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
        button.position(width / 2 - 1.1 * button.width, 7.25 * height / 8);
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
    slider.position(width / 2, (7.25/8) * height).center('horizontal');
}

function hideElements()
{
    reDrawButton.hide();
    loopButton.hide();
    octaveSlider.hide();
    incSlider.hide();
}

function showInc()
{
    incSlider.show();
}

function showReDraw()
{
    reDrawButton.show();
}

function showOctave()
{
    octaveSlider.show();
}

function showLoop()
{
    loopButton.show();
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

function windowResized()
{
    removeElements();
    resizeCanvas(windowWidth, windowHeight);
    drawElements();
    hideElements();
    pages[pgIndex]();
}

/** Functions to return each page and show their elements*/
function page0() {return pg0();}
function page1() {return pg1();}
function page2() {return pg2();}
function page3() {return pg3();}
function page3_1() {return pg3_1();}
function page4() {return pg4();}
function page4() {return pg4();}
function page5() {showReDraw(); return pg5();}
function page6() {showReDraw(); return pg6();}
function page7() {return pg7();}
function page7_1() {return pg7_1();}
function page8() {showOctave(); return pg8();}
function page9() {showOctave(); return pg9();}
function page10() {showLoop(); return pg10();}
function page11() {showLoop(); return pg11();}
function page12() {showInc(); return pg12();}
function page13() {showReDraw(); return pg13();}
function page14() {showLoop(); return pg14();}
function page15() {return pg15();}
function page16() {return pg16();}

// /** Function to set up variables and objects for each page*/
// function pageSetup1() {}
// function pageSetup2() {}
// function pageSetup3() {}
// function pageSetup3_1() {}
// function pageSetup4() {}
// function pageSetup4() {}
// function pageSetup5() {}
// function pageSetup6() {}
// function pageSetup7() {}
// function pageSetup7_1() {}
// function pageSetup8() {}
// function pageSetup9() {}
// function pageSetup10() {}
// function pageSetup11() {}
// function pageSetup12() {}
// function pageSetup13() {}
// function pageSetup14() {}
// function pageSetup15() {return pgSetup15();}
// function pageSetup16() {}