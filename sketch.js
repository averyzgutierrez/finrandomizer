let mood = ['insecure', 'burned out', 'tired', 'happy', 'confident', 'mad', 'upset','creative','intuitive','epic'];
let noun = ['student', 'artist', 'tarot reader', 'person', 'gamer', 'musician', 'day dreamer'];

let no;
let mo;

let co1 = 111
let co2 = 257
let co3 = 140


let wrds;
let button;


 

function setup() {
  createCanvas(400, 400);
  button = createButton('click me');
  button.mousePressed(buttonPressed);
  button.style ('background-color', '#e1cef2');
  button.position(320, 60);
  background(0);
  frameRate(60);
  intText();
  fortBall();
  backg1 = random();
  backg2 = random();
  backg3 = random();
  

  
}

function draw() {
fill(co1, co2, co3);
  rect(mouseX*2, mouseY*2, backg1, backg1);
  rect(mouseX*1, mouseY*3, backg2, backg2);
  rect(mouseX*2, mouseY*1, backg3, backg3);
 rect(mouseX*3, mouseY*3, backg1, backg1);
  rect(mouseX*3, mouseY*3, backg2, backg2);
  rect(mouseX*2, mouseY*3, backg3, backg3);
}

function buttonPressed() {
  no = int(random(noun.length));
  mo = int(random(mood.length));
  wrds = mood[mo] + ' ' + noun[no] + '.';
  co1 = random(257)
  co2 = random(257)
  co2 = random(257)
  fortText();
  console.log(wrds);
}

function fortBall() {
  noStroke();
  fill(co1, co2, co3);
ellipse(200, 200, 55, 55);
  ellipse(100, 145, 10, 10);
ellipse(290, 80, 20, 20);
  ellipse(200, 200, 70, 10);
  ellipse(300, 300, 30, 30);
  ellipse(70, 260, 20, 20);
   }

function intText() {
  fill(co1,co2,co3);
  textAlign(CENTER);
  //this is a lie, you can click anywhere
  text('How do you feel today?', width*0.5, height*0.3);
}

function fortText() {
  background(0);
  intText();
  fortBall();
  fill(co1,co2,co3);
  textAlign(CENTER);
  text('I am a', width*0.5, height*0.7);
  text(wrds, width*0.5, height*0.75)
}
