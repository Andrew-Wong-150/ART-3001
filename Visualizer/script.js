function analyze(data) {

  var rgb = [];
  var length = Object.keys(data).length;
	var chunck = 3;
  
  for (let i = 0; i < length; i += chunck) {
      rgb.push(data.slice(i, i + chunck));
  }
  
  return rgb;
  
}

function heatmap(data) {
	
  /*
  var heat = [{
  	z: data,
    type: 'contour',
    showscale: false,  
  }];
  */

}

function main() {

  var img = new Image();

  img.crossOrigin = 'Anonymous';
  img.onload = () => {

    var context = document.createElement('canvas').getContext('2d');
    context.drawImage(img, 0, 0, img.width, img.height);
    var img_data = context.getImageData(0, 0, img.width, img.height);
    var pixel_data = Array.prototype.slice.call(img_data['data']);
    var rgb_data = analyze(pixel_data);
    heatmap(rgb_data);

  }

  /*
  img.src = 'https://www.spendwithpennies.com/wp-content/uploads/2019/04/Fruit-Salad-SWP-500x375.jpg';
  img.src = 'https://picsum.photos/200/300';
  */
  img.src = 'https://picsum.photos/200/300';
  
}

main();
