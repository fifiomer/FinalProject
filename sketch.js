let x1,y2,x2,y1,distance;
function setup() {
  createCanvas(400, 400);
  background('black');
  
  x1 = width/2;
  y1 = height/2;
  
  distance = 5;
  
  x2 = x1+distance;
  y2 = y1+distance;
}

function draw() {
  
  display();
  walkingDirection();
  keepInCanvas();
}

function display()
{
  stroke('white');
  strokeWeight(2);
  line(x1,y1,x2,y2);
  
  x1 = x2;
  y1 = y2;
}

function walkingDirection()
{
  let nextPos = floor(random(4));
  if (nextPos ==0){
    x2 = x1 + distance;
  }
  else if(nextPos == 1)
    {
      x2 = x1 - distance;
    }
  else if(nextPos == 2)
    {
      y2 = y1 + distance;
    }
  else if(nextPos == 3)
    {
      y2 = y1 - distance;
    }
}

function keepInCanvas()
{
  if(x2 < 0)
    {
      x2 = 0;
    }
  else if (x2 > width)
    {
      x2 = width;
    }
  if(y2 < 0)
    {
      y2 = 0;
    }
  else if (y2 > height)
    {
      y2 = height;
    }
}


