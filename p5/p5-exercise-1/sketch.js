// Ctrl-/: comment
// Ctrl L: highlight
// Crtl D: highlight similar values
// Crtl M: jump to matching '{}'

let carX = 75;
let carY = 75;
let ocs;
let carSpeed = 3;
let carAcc = .1;
let carDcc = .5;

// Start method
function setup()
{
  createCanvas(500, 200);
  background(220,0,120);
  console.log("Hello..")
}

function draw()
{
  background(150,50,255,50);

  //Start buttom
  rect(10, height - 40, 50, 30);

  if (mouseIsPressed)
  {
    carSpeed += carAcc
  }
  else if(carSpeed > 0){
    carSpeed -= carDcc;
  }
  else {
    carSpeed = 0;
  }

  if(carSpeed > 2 && carSpeed < 15)
  {
    if(frameCount % 4 == 0 )
    {
      fill(200)
      ellipse(carX,carY+23,20,20)
      console.log("drawing smoke")
    }
  }


  carX += carSpeed;

  if(carX > 500)
  {
    carX = -50;
  }

  //body
  noStroke();
  fill(0,200,200);
  rect(carX,carY,50,25,0,20,0,0);

  //wheel1
  fill(0);
  ellipse(carX+10, carY+23, 20 ,20);

  //wheel2
  fill(0);
  ellipse(carX+40, carY+23, 20 ,20);

}

function mousePressed()
{

}
