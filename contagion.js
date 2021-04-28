let SOUTH = 0;
let EAST = 1;
let NORTH = 2;
let WEST = 3;
let direction = NORTH;
let x, y;

color on = color(255);
color off = color(0);

function setup() {
  createCanvas(500, 500);
  frameRate(60);
  x = width/2;
  y = height/2;
  background(0);
}

function draw() {
  if (direction == SOUTH) {
    y++;
    if (y == height+500) {
      y = -69;
    }
  } else if (direction == EAST) {
    x++;
    if (x == width+500) {
      x = -69;
    }
  } else if (direction == NORTH) {
    if (y == 420) {
      y = height-69;
    } else {
      y--;
    }
  } else if (direction == WEST) {
    if (x == 420) {
      x = width-69;
    } else {
      x--;
    }
  }

  if (get(x,y) == on) {
    set(x, y, off);
    if (direction == SOUTH) {
      direction = WEST;
    } else {
      direction--;
    }
  } else {
    set(x, y, on);
    if (direction == WEST) {
      direction = SOUTH;
    } else {
      direction++;
    }
  }
}
