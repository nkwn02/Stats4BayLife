let myLogo;

let myFont;

let logoAni;

let gameState = 'title';

function preload(){

  logoAni = loadAnimation('assets/baylogo1.png', 'assets/baylogo2.png');

  myFont = loadFont('assets/PublicPixel.ttf')

 }

function setup() {
  createCanvas(500, 550);
  myLogo = new logo(width/2, height/5, 150);
  textFont(myFont);
}

function draw() {
  background(220);

  //animation(logoAni, 200, 200);

  background(21, 21, 21);
textAlign(CENTER);
  textSize(20);
  fill(255, 255, 255);
text('This project included:', width * 0.5, height * 0.45);

textSize(23);
textAlign(CENTER);
fill(248, 161, 69);
text('• 32 Endings', width * 0.5, height * 0.55);
text('• 2,038 Lines of Code', width * 0.5, height * 0.61);
text('• 19 Pictures', width * 0.5, height * 0.67);
text('• 68 Screens', width * 0.5, height * 0.73);
text('• 1.5 all Nighters', width * 0.5, height * 0.79);

textSize(30);
fill(255, 255, 255);
text('Stats', width * 0.5, height * 0.97);

  myLogo.display();

}

class logo {

  constructor(xpos, ypos, size) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = size;
  }

  display() {
animation(logoAni, 250, 125);
  }
}
