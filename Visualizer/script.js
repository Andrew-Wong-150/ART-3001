
function analyze(data) {

	array = [];
  rgb = [];

	for(var i = 0; i < data.lenght; i++) {
  	rgb.push(data[i]);
    if(i % 3 == 0) {
    	array.push(rgb);
      rgb = [];
    }
  }

	console.log(array[0]);
	return array;

}


var img = new Image();

img.crossOrigin = 'Anonymous';
img.onload = () => {

  var context = document.createElement('canvas').getContext('2d');
  context.drawImage(img, 0, 0);
  var data = context.getImageData(0, 0, img.width, img.height);
  var pixel_data = Array.prototype.slice.call(data['data']);

	console.log(pixel_data);
  
}

img.src = 'https://www.spendwithpennies.com/wp-content/uploads/2019/04/Fruit-Salad-SWP-500x375.jpg';
