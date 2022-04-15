/*
  Modified backbone created by simontiger
  https://editor.p5js.org/simontiger/sketches/rk8mD8qm-
*/

var network;
var window_x;
var window_y;
var neurons = [];

function setup() {
  window_x = windowWidth;
  window_y = windowHeight;
  createCanvas(window_x, window_y);
  createNetwork();

}

function createNetwork() {

  network = new Network(80, window_y / 2);
  var nodes = [];

  nodes.push(new Neuron(0, 0));

  for(var layer = 1; (layer + 1) * 200 < window_x - 80; layer++) {

    var nodes_per_layer = parseInt(random(3, 5));

    for(var node = 0; node < nodes_per_layer; node++) {
      var flip = random() < 0.5 ? -1 : 1;
      nodes.push(new Neuron(layer * 200, flip * node * (window_y / 2 - 80) / nodes_per_layer));
    }
  }

  nodes.push(new Neuron((layer + 1) * 200 - 80, 0));

  for(let i = 0; i < nodes.length; i++) {

    if(i == 0) {
      continue;
    }

    network.connect(nodes[i - 1], nodes[i], 0.9);

    while(random() > 0.5) {

      var connection = random(nodes.length);
      while(connection <= i) {
        connection = random(nodes.length);
      }

      network.connect(nodes[i], nodes[parseInt(connection)], random(0, 0.5));
    }
  }

  for(let i = 0; i < nodes.length; i++) {
    network.addNeuron(nodes[i]);
  }

}

function draw() {
  background(0);
  network.update();
  network.display();

  if (frameCount % 30 == 0) {
		network.feedforward(random(1), random(1));
  }
}

function mouseClicked() {
  createNetwork();
}
