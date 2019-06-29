// For yellow button

var $zoomBtnLeft = document.getElementById('zoom-left-btn');
var $zoomBtnRight = document.getElementById('zoom-right-btn');
var $zoomBtnCenter = document.getElementById('zoom-center-btn');
var $btnZoomChange = document.querySelector('.btn__zoom-change');

$zoomBtnLeft.addEventListener('click', function () {
    $btnZoomChange.style.left = '22%';
});

$zoomBtnCenter.addEventListener('click', function () {
   $btnZoomChange.style.left = '49%';
});

$zoomBtnRight.addEventListener('click', function () {
    $btnZoomChange.style.left = '75%';
});

// For Shutter

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.srcObject = stream;
        video.play();
    });
}

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var $canvasItemTransform = document.getElementById('canvas-item-transform');


var $shutter = document.getElementById('shutter');

function addClassOn() {
    $shutter.classList.add('on');
}

function removeClassOn() {
    $shutter.classList.remove('on');
}


var $btnPhoto = document.getElementById('btn-photo');
var $canvasItemOpacity = document.getElementById('canvas-item-opacity');
const PRINT_AUDIO = new Audio("https://www.soundjay.com/mechanical/sounds/polaroid-camera-take-picture-02.mp3");

$btnPhoto.addEventListener('click', function () {
    $canvasItemTransform.classList.remove('canvas__item-animation');
    $canvasItemOpacity.classList.remove('canvas__item-opacity-animation');

   setTimeout(function () {
       addClassOn();
       PRINT_AUDIO.play();
   }, 300);

   setTimeout(function () {
       removeClassOn();

       // $canvasItemOpacity.addEventListener('mouseover', function () {
       //     this.classList.add('canvas__item-opacity-animation');
       //
       // }, false);

       setTimeout(function () {
           $canvasItemOpacity.addEventListener('mouseover', function () {
               this.classList.add('canvas__item-opacity-animation');
               // $canvasItemTransform.classList.add('canvas__item-animation');
           }, false);
       }, 3000);


       $canvasItemTransform.classList.add('canvas__item-animation');

       context.drawImage(video, 0, 0, 297, 297);

   }, 400)

});


//for lighter and darker yellow buttons

var $canvasFilter = document.querySelector('.canvas-filter');
var $zoomLeftBtn  = document.getElementById('zoom-left-btn');
var $zoomCenterBtn = document.getElementById('zoom-center-btn');
var $zoomRightBtn = document.getElementById('zoom-right-btn');

$zoomLeftBtn.addEventListener('click', function () {
   $canvasFilter.style.filter = "brightness(50%)";
});

$zoomCenterBtn.addEventListener('click', function () {
    $canvasFilter.style.filter = "brightness(1)";
});

$zoomRightBtn.addEventListener('click', function () {
    $canvasFilter.style.filter = "brightness(2)";
});








