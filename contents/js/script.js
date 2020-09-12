var hotscreamS = document.getElementById("hotscreamS");
var coldscreamS = document.getElementById("coldscreamS");
var hotscreamM = document.getElementById("hotscreamM");
var coldscreamM = document.getElementById("coldscreamM");
var hotscreamX = document.getElementById("hotscreamX");
var coldscreamX = document.getElementById("coldscreamX");


document.addEventListener("DOMContentLoaded", function () {
    var pointer = document.getElementById("pointer"),
        pointerBox = pointer.getBoundingClientRect(),
        centerPoint = window.getComputedStyle(pointer).transformOrigin,
        centers = centerPoint.split(" ");

    function rotatePointer(e) {
        var pointerEvent = e;
        if (e.targetTouches && e.targetTouches[0]) {
            e.preventDefault();
            pointerEvent = e.targetTouches[0];
            mouseX = pointerEvent.pageX;
            mouseY = pointerEvent.pageY;
        } else {
            mouseX = e.clientX,
                mouseY = e.clientY;
        }

        console.log(getComputedStyle(document.querySelector('#root')).getPropertyValue('width'))
        console.log(1366 / 2)

        /*
        let blah = document.querySelector('#root')
        let blahprop = getComputedStyle(blah)
        let rootwidth = blahprop.getPropertyValue('width')*/
        let hottempcol = 'red-pointer.svg'
        let cooltempcol = 'blue-pointer.svg'

        if (650<mouseX && mouseX < 683) {
            pointer.src = hottempcol
            hotscreamX.play();
        } else if (620<mouseX && mouseX < 650) {
            pointer.src = cooltempcol
            hotscreamM.play();
        } else if (590<mouseX && mouseX < 620) {
            pointer.src = hottempcol
            hotscreamX.play();
        } else if (683<mouseX && mouseX < 710) { //COLD SET
            pointer.src = cooltempcol
            coldscreamS.play();
        } else if (740<mouseX && mouseX < 770) {
            pointer.src = hottempcol
            coldscreamM.play();
        } else if (770<mouseX) {
            pointer.src = cooltempcol
            coldscreamX.play();
        }


        var centerY = pointerBox.top + parseInt(centers[1]) - window.pageYOffset,
            centerX = pointerBox.left + parseInt(centers[0]) - window.pageXOffset,
            radians = Math.atan2(mouseX - centerX, mouseY - centerY),
            degrees = (radians * (180 / Math.PI) * -1) + 180;
        pointer.style.transform = 'rotate(' + degrees + 'deg)';
    }

    window.addEventListener('mousemove', rotatePointer);
    window.addEventListener('touchmove', rotatePointer);
    window.addEventListener('touchstart', rotatePointer);
})