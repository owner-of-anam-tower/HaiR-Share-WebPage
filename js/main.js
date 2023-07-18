$(document).ready(function() {
  var param = getParameterByName('faceShape');
  shape = data[0][param]

  var prefix = colorChangePrefix(shape.faceShapeReport.prefix);
  var faceShapeName = shape.faceShapeReport.name;
  var faceShapeType = shape.faceShapeReport.faceShapeType;
  var faceLengthType = shape.faceShapeReport.faceLengthType;
  var imageName = shape.faceShapeReport.imageName;
  var description = colorChangeDescription(shape.faceShapeReport.description);
  $("#faceShapeName").text(faceShapeName);
  $("#shapeImg").attr("src", "shapeImg/"+imageName.toLowerCase()+".png");

});

// Function to get the value of a URL parameter by its name
function getParameterByName(name) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function colorChangePrefix(text){
  var descriptionText = document.getElementById('prefix');

  var replacedText = text.replace(/\*\!(.*?)\*\!/g, '<span style="color: #FF6D6D;">$1</span>');

  descriptionText.innerHTML = replacedText;
}

function colorChangeDescription(text){
  var text1 = text.replace(/\*\!(.*?)\*\!/g, '<span style="color: #5956FF; font-weight: bold;">$1</span>');
  var replacedText = text1.replace(/\*\*(.*?)\*\*/g, '<span style="font-weight: bold;">$1</span>');

  descriptionText.innerHTML = replacedText;
}
