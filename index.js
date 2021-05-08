function styleButton(button, left)
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
