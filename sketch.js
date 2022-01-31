let pickedColor, arrayColors, resetButton;

//makes a canvas and sets the color pickers
function setup() 
{
  createCanvas(1920, 1080);
  resetCanvas();
  pickedColor = (0);
  arrayColors = [];
  
  arrayColors.push(new colorPicker(0, color(255, 0, 0)));
  arrayColors.push(new colorPicker(75, color(255, 150, 0)));
  arrayColors.push(new colorPicker(150, color(255, 255, 0)));
  arrayColors.push(new colorPicker(225, color( 0, 255, 0)));
  arrayColors.push(new colorPicker(300, color(0, 255, 255)));
  arrayColors.push(new colorPicker(375, color(0, 0, 255)));
  arrayColors.push(new colorPicker(450, color(255, 0, 255)));
  arrayColors.push(new colorPicker(525, color(150, 75, 0)));
  arrayColors.push(new colorPicker(600, 255));
  arrayColors.push(new colorPicker(675, 0));
  
}
//logic for resetting canvas
function resetCanvas()
{
  noStroke();
  fill(255);
  rect(0, 0, 1920, 1080);
}

//graphics for reset button
function setResetButton()
{
  stroke(1);
  strokeWeight(2);
  fill(255);
  rect(5, 750, 75, 75);
  
  fill(0);

  text("RESET", 23, 790);
}

//allows user to draw on the canvas
function draw() 
{
  if(mouseIsPressed)
  {
    if(mouseX > 75)
    {
      stroke(pickedColor);
      strokeWeight(10);
      fill(255, 0, 0);
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
    else
    {
      for(var i = 0; i < arrayColors.length; i++)
      {
        if(mouseY > i * 75 && mouseY < (i + 1) * 75)
        {
          pickedColor = arrayColors[i].getColor();
        }
        
      }
      if(mouseY > 750 && mouseY < 825)
      {
        resetCanvas();
      }
    }  
  }

  for(var i = 0; i < arrayColors.length; i++)
  {
    arrayColors[i].appear();
  }

  setResetButton();
}

//logic for the color picker
class colorPicker
{
  constructor(y, color)
  {
    this.x = 5;
    this.y = y;
    this.w = 75;
    this.h = 75;
    this.color = color;
  }

  getColor()
  {
    return this.color;
  }

  appear()
  {
    noStroke();
    fill(this.color)
    rect(this.x, this.y, this.w, this.h);
  }

}