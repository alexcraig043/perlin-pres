class PageTemplate
{
    constructor(titleText, pageNum)
    {
        this.setTitleText(titleText);
        this.pageNum = pageNum;
        this.prevButton = this.makePrevButton;
        this.nextButton = this.makeNextButton;
        this.styleButton(this.prevButton, true);
        this.styleButton(this.nextButton, false);
    }

    setTitleText()
    {
        textAlign(CENTER);
        textFont('Oswald');
        fill(255);
        textSize(64);

        text(titleText, width / 2, height / 10);
        console.log(titleText);
    }

    styleButton(button, left)
    {
        if (left) 
        {
            button.position(width / 60, height / 2);
        } 
        else
        {
            button.position (56 * width / 60, height / 2);
        }
        button.style('background-color: #e65a5a');
        button.style('border: none');
        button.style('color: white');
        button.style('font: Oswald');
        button.style('font-size: 32px');
        button.style('border-radius: 8px');
        button.style('padding: 12px');
        button.style('padding-top: 8px');
        button.style('padding-bottom: 8px');
    }

    makeNextButton()
    {
        nextButton = createButton('Next');
        styleButton(nextButton, false);
    }

    makePrevButton()
    {
        prevButton = createButton('Prev');
        styleButton(prevButton, true);
    }

    nextPage()
    {
        this.removeButtons;
        this.pageNum++;
    }

    prevPage()
    {
        this.removeButtons;
        this.pageNum--;
    }

    removeButtons()
    {
        this.prevButton.remove();
        this.nextButton.remove();
    }
}