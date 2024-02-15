let ninjaSheet;
let walkingAnimation;

function preload() {
  ninjaSheet = loadImage("assets/Ninja.png");
  greenSheet = loadImage("assets/Green.png");
  yellowSheet = loadImage('assets/SpelunkyGuy.png');
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);

  walkingAnimation = new WalkingAnimation(ninjaSheet, 80, 80, 200, 200, 9, 0, 0);
  walkingAnimation2 = new WalkingAnimation(greenSheet, 80, 80, 100, 100, 9, 0, 0);
  walkingAnimation3 = new WalkingAnimation(yellowSheet, 80, 80, 300, 300, 9, 0, 0);
}

function draw() {
  background(220);

  walkingAnimation.draw();
  walkingAnimation2.draw();
  walkingAnimation3.draw();
}

function keyPressed() {
  walkingAnimation.keyPressed();
  walkingAnimation2.keyPressed();
  walkingAnimation3.keyPressed();
}

function keyReleased() {
  walkingAnimation.keyReleased();
  walkingAnimation2.keyReleased();
  walkingAnimation3.keyReleased();
}



class WalkingAnimation {
  constructor(spritesheet, sw, sh, dx, dy, animationLength, offsetX, offsetY) {
    this.spritesheet = spritesheet;
    this.sw = sw;
    this.sh = sh;
    this.dx = dx;
    this.dy = dy;
    this.u = 0;
    this.v = 0;
    this.animationLength = animationLength;
    this.currentFrame = 0;
    this.moving = 0;
    this.xDirection = 1;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }

  draw() {
    if (this.moving != 0) {
      this.u = this.currentFrame % this.animationLength;
    } else {
      this.u = 0;
    }
    push();

    translate(this.dx, this.dy);
    scale(this.xDirection, 1);
    
    image(this.spritesheet, 0, 0, this.sw, this.sh, this.u*this.sw+this.offsetX, this.v*this.sh+this.offsetY, this.sw, this.sh);

    pop();
    if(frameCount % 7 == 0 ) {
      this.currentFrame++;
    }
  
    this.dx += this.moving;
  }

  keyPressed() {
    if (keyCode === RIGHT_ARROW) {
      this.moving = 1;
      this.xDirection = 1;
    } else if (keyCode === LEFT_ARROW) {
      this.moving = -1;
      this.xDirection = -1;
    }
    this.currentFrame = 1;
  }

  keyReleased() {
    if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
      this.moving = 0;
    }
  }
}
