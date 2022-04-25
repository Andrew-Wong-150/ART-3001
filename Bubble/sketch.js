var circles = [];
var window_x;
var window_y;

class Circle {

  constructor(radius, x, y) {
    this.radius = radius;
    this.x = x;
    this.y = y;

    this.r = random(155) + 100;
    this.g = random(50) + 205;
    this.b = random(155) + 100;
  }

  display() {

    if(this.radius < 400) {
      this.radius += 10;
    }

    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.radius, this.radius);

  }

}

function setup() {
  window_x = windowWidth;
  window_y = windowHeight;
  createCanvas(window_x, window_y);
  background(0, 0, 0);
}

function draw() {

    if (frameCount % 2 == 0) {

      for (var i = 0; i < circles.length; i++) {
        var circle = circles[i];
        circle.display();
        write_text();
      }

    }

}

function write_text() {

  textSize(70);
  textStyle(BOLDITALIC);
  fill(0, 0, 0);

  var words = "MAYBE THEY SLEEP AND WAIT TO BE WOKEN ................";
  words = words.split(" ");

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    text(word, (i + 1) * window_x / (words.length * 2), (i + 1) * window_y / (words.length * 1.5));
  }

}


function mouseClicked () {
    circles.unshift(new Circle(0, mouseX, mouseY));
}
