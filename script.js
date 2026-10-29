
var header = document.getElementById('header');
var mouseClick = document.getElementById('mouseClick');
var changed = false;

function onClick() {
    if (!changed) {
        header.style.color = '#d569ff';
        changed = true;
    } else {
        header.style.color = 'white';
        changed = false;
    }
}


var mouseClick = document.getElementById('mouseClick');

var navLinks = document.querySelectorAll('.links a');

navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        var destination = link.href;

        mouseClick.currentTime = 0;
        mouseClick.play();

        mouseClick.onended = function() {
            window.location.href = destination;
        };

        setTimeout(function() {
            window.location.href = destination;
        }, 500);
    });
});


header.addEventListener('click', onClick);
