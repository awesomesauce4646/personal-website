var header = document.getElementById('header');
var changed = false

function onClick() {
    if (!changed) {
        header.style.color = '#d569ff';
        changed = true;
    } else {
        header.style.color = 'white';
        changed = false;
    }
}

header.addEventListener('click', onClick);
