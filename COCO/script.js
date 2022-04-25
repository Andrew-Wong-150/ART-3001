/*
code taken from
https://codelabs.developers.google.com/codelabs/tensorflowjs-object-detection#0
*/

var model = undefined;

cocoSsd.load().then(function (loadedModel) {
  model = loadedModel;
  var ready = document.getElementById("ready");
  ready.style.display = "none";
  enableCam();
});

const video = document.getElementById('webcam');
const liveView = document.getElementById('liveView');

function hasGetUserMedia() {
  return (navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia);
}

var children = [];

function enableCam() {

  const constraints = {
    video: true
  };

  navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
    video.srcObject = stream;
    video.addEventListener('loadeddata', predictWebcam);
  });
}

function predictWebcam() {

  model.detect(video).then(function (predictions) {
    for (let i = 0; i < children.length; i++) {
      liveView.removeChild(children[i]);
    }

    children.splice(0);
    for (let n = 0; n < predictions.length; n++) {

      if (predictions[n].score > 0.50) {
        const p = document.createElement('p');
        p.innerText = predictions[n].class  + ' - with '
            + Math.round(parseFloat(predictions[n].score) * 100)
            + '% confidence.';
        p.style = 'left: ' + predictions[n].bbox[0] + 'px;' +
            'top: ' + predictions[n].bbox[1] + 'px;' +
            'width: ' + (predictions[n].bbox[2] - 10) + 'px;';

        const highlighter = document.createElement('div');
        highlighter.setAttribute('class', 'highlighter');
        highlighter.style = 'left: ' + predictions[n].bbox[0] + 'px; top: '
            + predictions[n].bbox[1] + 'px; width: '
            + predictions[n].bbox[2] + 'px; height: '
            + predictions[n].bbox[3] + 'px;';

        liveView.appendChild(highlighter);
        liveView.appendChild(p);
        children.push(highlighter);
        children.push(p);
      }
    }

    window.requestAnimationFrame(predictWebcam);
  });
}
