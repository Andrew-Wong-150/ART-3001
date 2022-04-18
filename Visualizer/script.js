
function analyze(data) {

  var array = [];
  var rgb = [];
   
  console.log(Object.keys(data).length);
  
  for(var i = 0; i < Object.keys(data).length; i++) {
    rgb.push(data[i]);
    if(i % 3 == 0) {
      array.push(rgb);
      rgb = [];
    }
  }

  return array;

}


var img = new Image();

img.crossOrigin = 'Anonymous';
img.onload = () => {

  var context = document.createElement('canvas').getContext('2d');
  context.drawImage(img, 0, 0, img.width, img.height);
  var data = context.getImageData(0, 0, img.width, img.height);
  var pixel_data = Array.prototype.slice.call(data['data']);

  analyze(pixel_data);
  
}

/*img.src = 'https://www.spendwithpennies.com/wp-content/uploads/2019/04/Fruit-Salad-SWP-500x375.jpg';*/
img.src = 'https://picsum.photos/200/300';
