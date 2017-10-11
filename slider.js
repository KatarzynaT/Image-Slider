var imagesArray = [
    "https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg",
    "https://static.pexels.com/photos/35600/road-sun-rays-path.jpg",
    "https://static.pexels.com/photos/230629/pexels-photo-230629.jpeg",
    "https://static.pexels.com/photos/247599/pexels-photo-247599.jpeg",
    "https://static.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg",
    "https://static.pexels.com/photos/355296/pexels-photo-355296.jpeg",
    "https://static.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg"
];

var num = 0;

function next() {
    var slider = document.getElementById("slider");
    num ++;
    if(num >= imagesArray.length) {
        num = 0;
    }
    slider.src = imagesArray[num];
}

function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num<0) {
        num = images.length-1;
    }
    slider.src = imagesArray[num];
}