function start_classification(){
navigator.mediaDevices.getUserMedia({audio:true});

classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/N9QkALKXF/model.json',modelReady);
}

function modelReady(){
 classifier.classify(gotResults);
}

function gotResults(error,result){
console.log('Hello');
}

